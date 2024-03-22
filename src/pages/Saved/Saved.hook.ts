import { INDEXED_DB } from "~/constants/common";
import { fake_call_api } from "~/helpers/common.helper";
import { indexedDatabase } from "~/helpers/indexedDB";
import { useReactQuery } from "~/hooks";
import { useAppSelector } from "~/hooks/useRedux";
import { ProspectModel } from "~/models";
import { UserModel } from "~/models/user.model";

const useSaved = () => {
  const user: UserModel = useAppSelector((state) => state.global.user);

  const { isLoading, data } = useReactQuery<ProspectModel[]>({
    queryKey: ["saved-", user?.id?.toString()],
    queryFn: async () => {
      const dataUser = (await fake_call_api(
        () =>
          indexedDatabase(INDEXED_DB.TABLE.USERS).findMany({
            id: user?.id,
          }),
        { delay: 1000 }
      )) as UserModel[];
      return dataUser?.[0].saved || [];
    },
  });

  return {
    isLoading,
    data,
  };
};

export default useSaved;
