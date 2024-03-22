import { ButtonTab } from "~/components/common";
import useCompanyDetails from "./CompanyDetails.hook";
import { COMPANY_DETAIL_TAB } from "~/constants/common";
import CompanyLogo from "~/components/common/CompanyLogo";
import { Skeleton } from "~/components/ui/skeleton";
import CompanyTab from "./CompanyTab/CompanyTab.component";
import AllEmployeeTab from "./AllEmployeeTab/AllEmployeeTab.component";

const CompanyDetails = () => {
  const { currTab, setTab, isLoading, dataCompany, dataEmployee } =
    useCompanyDetails();

  if (isLoading) {
    return (
      <div className="w-full h-full flex flex-col py-3">
        <Skeleton className="w-full h-[100px]" />
        <Skeleton className="w-full grow mt-2" />
      </div>
    );
  }

  if (!dataCompany) {
    return <></>;
  }

  return (
    <div className="w-full h-full flex flex-col">
      <CompanyLogo
        thumbnail={dataCompany?.thumbnail}
        name={dataCompany?.name || ""}
        url={dataCompany?.url || ""}
      />
      <div className="h-full w-full flex flex-col overflow-hidden">
        <div className="container border-b border-secondary flex gap-3">
          <ButtonTab
            onClick={() => setTab(COMPANY_DETAIL_TAB.COMPANY)}
            active={currTab === COMPANY_DETAIL_TAB.COMPANY}
            name="Company"
          />
          {dataEmployee?.length ? (
            <ButtonTab
              onClick={() => setTab(COMPANY_DETAIL_TAB.ALL_EMPLOYEE)}
              active={currTab === COMPANY_DETAIL_TAB.ALL_EMPLOYEE}
              name="All Employee"
            />
          ) : (
            <></>
          )}
        </div>
        <div className="w-full h-full pt-1 overflow-hidden">
          {currTab === COMPANY_DETAIL_TAB.COMPANY && (
            <CompanyTab
              data={dataCompany}
              popularProspect={dataEmployee || []}
              goToEmployeeTab={() => setTab(COMPANY_DETAIL_TAB.ALL_EMPLOYEE)}
            />
          )}
          {currTab === COMPANY_DETAIL_TAB.ALL_EMPLOYEE && (
            <AllEmployeeTab data={dataEmployee || []} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
