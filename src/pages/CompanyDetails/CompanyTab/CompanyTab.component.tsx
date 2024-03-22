import InfoItem from "~/components/common/InfoItem";
import { CompanyModel, ProspectModel } from "~/models";
import { PopularEmployeeItem } from "../../../components/common";
import { IoChatboxOutline } from "react-icons/io5";
import { HiOutlineUsers, HiMiniArrowTrendingUp } from "react-icons/hi2";
import { LiaIndustrySolid } from "react-icons/lia";
import { TiWorldOutline } from "react-icons/ti";
import { SocialMediaItem } from "~/components/common";
import { Button } from "~/components/ui/button";

interface IProps {
  goToEmployeeTab: () => void;
  popularProspect: ProspectModel[];
  data?: CompanyModel;
}
const CompanyTab = (props: IProps) => {
  const companyInfo = props.data;

  return (
    <div className="w-full h-full flex flex-col bg-secondary overflow-auto">
      <div className="w-full container bg-white">
        <InfoItem value={companyInfo?.description} />
      </div>

      {props.popularProspect.length ? (
        <div className="w-full bg-white mt-4 py-3">
          <p className="text-xs text-gray container">Popular employees</p>
          <div className="w-full flex flex-col pt-1">
            {props.popularProspect.map((e) => (
              <PopularEmployeeItem key={e.id} data={e} isLock={e.id % 2 == 0} />
            ))}
          </div>
          <div className="w-full container">
            <Button
              size={"sm"}
              variant={"link"}
              onClick={props.goToEmployeeTab}
            >
              Show more
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="w-full bg-white mt-4 py-3 container">
        <p className="text-xs text-gray">Company info</p>
        <div className="w-full flex flex-col pt-1 ">
          <InfoItem
            hidden={!companyInfo?.employeeNumber}
            icon={HiOutlineUsers}
            name="Number of employees"
            value={companyInfo?.employeeNumber}
          />
          <InfoItem
            hidden={!companyInfo?.industry}
            icon={LiaIndustrySolid}
            name="Industry"
            value={companyInfo?.industry}
          />
          <InfoItem
            hidden={!companyInfo?.subIndustry}
            icon={LiaIndustrySolid}
            name="Sub industry"
            value={companyInfo?.subIndustry}
          />
          <InfoItem
            hidden={!companyInfo?.specialties?.length}
            icon={LiaIndustrySolid}
            name="Sub industry"
            valueElement={
              <div className="flex flex-wrap gap-1">
                {companyInfo?.specialties?.map((item, i) => (
                  <div className="p-[4px] text-[10px] bg-secondary" key={i}>
                    {item}
                  </div>
                ))}
              </div>
            }
          />
          <InfoItem
            hidden={!companyInfo?.annualRevenue}
            icon={HiMiniArrowTrendingUp}
            name="Annual revenue range"
            value={companyInfo?.annualRevenue}
          />
          <InfoItem
            hidden={!companyInfo?.country}
            icon={TiWorldOutline}
            name="Country"
            value={companyInfo?.country}
          />
          <InfoItem
            hidden={!companyInfo?.social?.length}
            icon={IoChatboxOutline}
            name="Social media"
            valueElement={
              <div className="w-full flex flex-wrap gap-1">
                {companyInfo?.social?.map((e, i) => (
                  <SocialMediaItem type={e.type} url={e.url} key={i} />
                ))}
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyTab;
