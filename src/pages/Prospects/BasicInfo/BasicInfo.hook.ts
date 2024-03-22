import { useEffect, useMemo, useState } from "react";
import { useProspectsContext } from "../Prospects.context";
import { CONTACT_TYPE, INDEXED_DB } from "~/constants/common";
import { ContactModel } from "~/models";
import { useAppSelector } from "~/hooks/useRedux";
import { ContactCustomModel, UserModel } from "~/models/user.model";
import { useReactQuery } from "~/hooks";
import { indexedDatabase } from "~/helpers/indexedDB";

const useBasicInfo = () => {
  const user: UserModel = useAppSelector((state) => state.global.user);

  const { prospectInfo, refresh, onRefreshToggle } = useProspectsContext();
  const [isAdding, setAdding] = useState<CONTACT_TYPE | null>(null);
  const [contacts, setContact] = useState<
    Array<Partial<ContactCustomModel & ContactModel>>
  >([]);

  const { data: dataUser, refetch } = useReactQuery({
    queryKey: ["get-user", user.id?.toString()],
    queryFn: async () => {
      const res = await indexedDatabase(INDEXED_DB.TABLE.USERS).findMany({
        id: user.id,
      });

      return res[0] || null;
    },
  });

  useEffect(() => {
    const customContact =
      (dataUser?.customContact || [])?.filter(
        (e: any) => e.prospectId?.id == prospectInfo?.id
      ) || [];
    const prospectContact = prospectInfo?.contacts || [];
    const restProspectContact = prospectContact.filter(
      (e) => !customContact.some((_e: any) => _e.contactId?.id === e.id)
    );

    const final = [...customContact, ...restProspectContact].sort((a, b) =>
      a.type < a.type ? -1 : a.type > b.type ? 1 : 0
    );
    setContact(final);
  }, [prospectInfo, dataUser]);

  const isCanAddEmail = useMemo(() => {
    return contacts.filter((e) => e.type === CONTACT_TYPE.EMAIL).length < 2;
  }, [contacts]);

  const isCanAddPhone = useMemo(() => {
    return contacts.filter((e) => e.type === CONTACT_TYPE.PHONE).length < 2;
  }, [contacts]);

  const isShowSaveContact = useMemo(() => {
    const saved = dataUser?.saved || [];
    return !saved.some((e: UserModel) => e.id === prospectInfo?.id);
  }, [dataUser]);

  const handleAddContact = (type: CONTACT_TYPE | null) => {
    setAdding(type);
  };

  const handleSaveProspect = () => {
    const saved = dataUser?.saved || [];
    saved.push(prospectInfo);

    dataUser.saved = [...saved];
    indexedDatabase(INDEXED_DB.TABLE.USERS)
      .updateMany({
        where: { id: dataUser.id },
        data: dataUser,
      })
      .then(() => {
        refetch();
      });
  };

  const handleRefresh = () => {
    refetch();
  };

  useEffect(() => {
    if (!refresh) return;

    console.log("clsajhcikjs");

    refetch();
    onRefreshToggle();
  }, [refresh]);

  return {
    isAdding,
    isCanAddEmail,
    isCanAddPhone,
    isShowSaveContact,
    prospectInfo,
    contacts,
    handleAddContact,
    handleRefresh,
    handleSaveProspect,
  };
};

export default useBasicInfo;
