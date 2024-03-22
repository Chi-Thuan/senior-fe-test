import InfoItem from "../../../components/common/InfoItem";
import {
  IoChatboxOutline,
  IoLaptopOutline,
  IoSearch,
  IoOpenOutline,
} from "react-icons/io5";
import { LuFlagTriangleRight } from "react-icons/lu";
import { GoInfo } from "react-icons/go";
import { HiOutlineUsers, HiMiniArrowTrendingUp } from "react-icons/hi2";
import { LiaIndustrySolid } from "react-icons/lia";
import { TiWorldOutline } from "react-icons/ti";
import useResumeInfo from "./ResumeInfo.hook";
import { getDomainFromURL } from "~/helpers/common.helper";
import { SocialMediaItem } from "~/components/common";

const ResumeInfo = () => {
  const { resume } = useResumeInfo();

  if (!resume) {
    return <></>;
  }

  return (
    <div className="w-full container bg-white py-3 flex flex-col">
      <InfoItem
        icon={IoSearch}
        valueElement={
          <a
            href={"#!"}
            target="_bank"
            className="text-xxs text-gray font-medium hover:underline hover:underline-offset-4 flex items-center gap-1"
          >
            View all employees
            <IoOpenOutline />
          </a>
        }
      />
      <InfoItem
        hidden={!resume?.companyUrl}
        icon={IoLaptopOutline}
        valueElement={
          <a
            href={resume?.companyUrl}
            target="_bank"
            className="text-xxs text-gray font-medium hover:underline hover:underline-offset-4"
          >
            {getDomainFromURL(resume?.companyUrl)}
          </a>
        }
      />
      <InfoItem
        hidden={!resume?.about}
        icon={GoInfo}
        name="About"
        value={resume?.about}
      />
      <InfoItem
        hidden={!resume?.employeeNumber}
        icon={HiOutlineUsers}
        name="Number of employees"
        value={resume?.employeeNumber}
      />
      <InfoItem
        hidden={!resume?.industry}
        icon={LiaIndustrySolid}
        name="Industry"
        value={resume?.industry}
      />
      <InfoItem
        hidden={!resume?.subIndustry}
        icon={LiaIndustrySolid}
        name="Sub industry"
        value={resume?.subIndustry}
      />
      <InfoItem
        hidden={!resume?.specialties?.length}
        icon={LiaIndustrySolid}
        name="Sub industry"
        valueElement={
          <div className="flex flex-wrap gap-1">
            {resume?.specialties?.map((item, i) => (
              <div className="p-[4px] text-[10px] bg-secondary" key={i}>
                {item}
              </div>
            ))}
          </div>
        }
      />
      <InfoItem
        hidden={!resume?.founded}
        icon={LuFlagTriangleRight}
        name="Founded in"
        value={resume?.founded?.toString()}
      />
      <InfoItem
        hidden={!resume?.annualRevenue}
        icon={HiMiniArrowTrendingUp}
        name="Annual revenue range"
        value={resume?.annualRevenue}
      />
      <InfoItem
        hidden={!resume?.country}
        icon={TiWorldOutline}
        name="Country"
        value={resume?.country}
      />
      <InfoItem
        hidden={!resume?.social?.length}
        icon={IoChatboxOutline}
        name="Social media"
        valueElement={
          <div className="w-full flex flex-wrap gap-1">
            {resume?.social?.map((e, i) => (
              <SocialMediaItem type={e.type} url={e.url} key={i} />
            ))}
          </div>
        }
      />
    </div>
  );
};

export default ResumeInfo;
