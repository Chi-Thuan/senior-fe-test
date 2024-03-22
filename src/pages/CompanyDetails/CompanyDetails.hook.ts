import { useState } from "react";
import { MOCK_COMPANIES, MOCK_PROSPECT } from "~/__mocks__";
import { COMPANY_DETAIL_TAB } from "~/constants/common";
import { fake_call_api } from "~/helpers/common.helper";
import { useReactQuery, useRouter } from "~/hooks";
import { CompanyModel, ProspectModel } from "~/models";

const useCompanyDetails = () => {
  const { params } = useRouter();
  const companyIdParam = params.companyId || "";

  const [currTab, setTab] = useState<COMPANY_DETAIL_TAB>(
    COMPANY_DETAIL_TAB.COMPANY
  );

  const { isLoading, data: dataCompany } = useReactQuery<CompanyModel>({
    queryKey: ["company-", companyIdParam],
    queryFn: async () => {
      const data = await fake_call_api<CompanyModel>(
        () => {
          return MOCK_COMPANIES.find((e) => e.id.toString() === companyIdParam);
        },
        {
          delay: 500,
        }
      );

      return data;
    },
  });

  const { data: dataEmployee } = useReactQuery<ProspectModel[]>({
    queryKey: ["employee-", companyIdParam],
    queryFn: async () => {
      const data = await fake_call_api<ProspectModel[]>(
        () => {
          return MOCK_PROSPECT.filter(
            (e) => e.company?.id?.toString() === companyIdParam
          );
        },
        {
          delay: 500,
        }
      );

      return data;
    },
  });

  return {
    currTab,
    setTab,
    isLoading,
    dataCompany,
    dataEmployee,
  };
};

export default useCompanyDetails;
