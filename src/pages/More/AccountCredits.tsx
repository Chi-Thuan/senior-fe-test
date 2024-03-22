import { MdOutlineEmail } from "react-icons/md";
import { Progress } from "~/components/ui/progress";
import { LuPhone } from "react-icons/lu";

const AccountCredits = () => {
  return (
    <div className="w-full py-3 px-4 bg-white rounded-lg border border-gray2 overflow-hidden">
      <p className="text-xs font-medium mb-3">Account credits</p>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full">
          <div className="w-full flex items-center">
            <MdOutlineEmail className="shrink-0" size={14} />
            <div className="h-[10px] w-[2px] bg-secondary shrink-0 mx-1"></div>
            <p className="text-xxs">
              <b>1</b> used of <b>50</b>
            </p>
          </div>
          <Progress value={(1 / 50) * 100} className="w-[100%] h-[5px] mt-1" />
        </div>
        <div className="w-full">
          <div className="w-full flex items-center">
            <LuPhone className="shrink-0" size={14} />
            <div className="h-[10px] w-[2px] bg-secondary shrink-0 mx-1"></div>
            <p className="text-xxs">
              <b>0</b> used of <b>14</b>
            </p>
          </div>
          <Progress value={(0 / 14) * 100} className="w-[100%] h-[5px] mt-1" />
        </div>
      </div>
      <p className="w-full mt-4 text-[10px] text-gray">
        Last calculated: Mar 17, 2024, 12:47 PM{" "}
        <a
          href="#!"
          target="_blank"
          className="text-primary font-medium hover:underline"
        >
          Update
        </a>
      </p>
    </div>
  );
};

export default AccountCredits;
