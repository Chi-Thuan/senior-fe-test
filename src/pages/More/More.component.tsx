import { MdOutlineSettings } from "react-icons/md";
import SectionWrapper from "./SectionWrapper";
import OptionItem from "./OptionItem";
import { IoIosList } from "react-icons/io";
import AccountCredits from "./AccountCredits";
import {
  IoRocketOutline,
  IoSearch,
  IoShuffleOutline,
  IoLogoStencil,
  IoJournalOutline,
  IoGlobe,
  IoHeartOutline,
} from "react-icons/io5";
import { BsSendArrowUp } from "react-icons/bs";

const More = () => {
  return (
    <div className="w-full min-h-full container bg-secondary">
      <div className="w-full flex gap-2 pt-2">
        <div className="w-full flex gap-3">
          <div className="w-[32px] shrink-0 flex items-center">
            <img
              className="image-w"
              src="https://static-assets.lusha.com/plugin/icons/Profile.svg"
              alt="icon"
            />
          </div>
          <div className="w-full flex flex-col justify-center">
            <p className="text-md font-medium">Chi Thuan Huynh</p>
            <p className="text-xxs text-gray">
              Free plan.
              <a
                href="#!"
                target="_blank"
                className="font-bold text-primary ml-1 hover:underline"
              >
                Upgrade
              </a>
            </p>
          </div>
        </div>
        <a href="#!" target="_blank" className="shrink-0">
          <MdOutlineSettings size={20} />
        </a>
      </div>
      <div className="w-full flex flex-col gap-1.5 mt-3">
        <AccountCredits />
        <SectionWrapper name="Lusha platform">
          <OptionItem icon={IoRocketOutline} name="Onboarding" />
          <OptionItem icon={IoSearch} name="Prospecting platform" />
          <OptionItem icon={BsSendArrowUp} name="Sequences" />
          <OptionItem icon={IoIosList} name="Lists" />
          <OptionItem icon={IoShuffleOutline} name="Integrations" />
        </SectionWrapper>
        <SectionWrapper name="Extension preferences">
          <OptionItem icon={IoLogoStencil} name="Plugin position" />
          <OptionItem icon={IoJournalOutline} name="Auto open" />
          <OptionItem icon={IoGlobe} name="Enable Lusha Everywhere" />
        </SectionWrapper>
        <SectionWrapper name="Get free credits">
          <OptionItem icon={IoHeartOutline} name="Join the community" />
        </SectionWrapper>
        <SectionWrapper>
          <OptionItem name="Help center" />
          <OptionItem name="Terms of service" />
          <OptionItem name="Privacy policy" />
        </SectionWrapper>
        <p className="text-xxs text-gray pb-2">Plugin version: 10.4.2</p>
      </div>
    </div>
  );
};

export default More;
