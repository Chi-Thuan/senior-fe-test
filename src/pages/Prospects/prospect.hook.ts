import { useEffect, useMemo } from "react";
import { MOCK_PROSPECT } from "~/__mocks__";
import { fake_call_api } from "~/helpers/common.helper";
import { useReactQuery, useRouter } from "~/hooks";
import { ProspectModel } from "~/models";
import { useProspectsContext } from "./Prospects.context";

interface IProps {
  initProspectId?: string;
}
const useProspect = (props: IProps) => {
  const { initProspectId } = props;

  const { setProspectInfo } = useProspectsContext();
  const { params } = useRouter();
  const prospectIdParam = params.prospectId;

  const prospectId = useMemo(
    () => prospectIdParam ?? initProspectId ?? "",
    [prospectIdParam, initProspectId]
  );

  const { isLoading, data } = useReactQuery({
    queryKey: ["prospect-", prospectId],
    queryFn: async () => {
      const data = await fake_call_api<ProspectModel>(
        () => {
          return MOCK_PROSPECT.find((e) => e.id.toString() === prospectId);
        },
        {
          delay: 500,
        }
      );

      return data;
    },
  });

  useEffect(() => {
    if (data) {
      setProspectInfo(data);
    }
  }, [data]);

  return { isLoading };
};

export default useProspect;
