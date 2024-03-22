import { ContactModel } from "~/models";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addCustomContactValidationSchema } from "~/helpers/schemaValidation.helper";
import { useAppSelector } from "~/hooks/useRedux";
import { useProspectsContext } from "../../Prospects.context";
import { ContactCustomModel, UserModel } from "~/models/user.model";
import { indexedDatabase } from "~/helpers/indexedDB";
import { INDEXED_DB } from "~/constants/common";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "~/store/global/global.actions";

interface IProps {
  contactId?: ContactModel | null;
  cancelAdd?: () => void;
  onRefresh?: () => void;
}
1;
const useContactInfo = (props: IProps) => {
  const { contactId } = props;
  const dispatch = useDispatch();
  const { prospectInfo } = useProspectsContext();
  const user: UserModel = useAppSelector((state) => state.global.user);
  const [isEditing, setEditing] = useState(false);

  const form = useForm({
    resolver: yupResolver(addCustomContactValidationSchema),
  });

  const handleSubmitAdd = async (data: any) => {
    let newContact: ContactCustomModel = {
      type: data.type,
      value: data.value,
      prospectId: prospectInfo!,
    };

    let newCustomContact = user.customContact || [];

    if (contactId) {
      newContact.contactId = contactId;
    }

    newCustomContact = [...newCustomContact, newContact];

    indexedDatabase(INDEXED_DB.TABLE.USERS)
      .findMany({
        id: user.id,
      })
      .then((_listUser) => {
        let newUser = _listUser[0];
        newUser.customContact = newCustomContact;
        indexedDatabase(INDEXED_DB.TABLE.USERS)
          .updateMany({
            where: { id: user.id },
            data: newUser,
          })
          .then(() => {
            dispatch(updateUser(newUser));
            if (props.onRefresh) props.onRefresh();
            if (props.cancelAdd) props.cancelAdd();
          });
      });
  };

  return {
    form,
    handleSubmitAdd,
    isEditing,
    setEditing,
  };
};

export default useContactInfo;
