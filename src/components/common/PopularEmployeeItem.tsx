import { IoMdLock } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "~/hooks";
import { ProspectModel } from "~/models";

interface IProps {
  isLock?: boolean;
  data: ProspectModel;
}
const PopularEmployeeItem = (props: IProps) => {
  const prospectInfo = props.data;
  const { navigate } = useRouter();

  const goToDetails = () => {
    navigate("/search/prospect/" + prospectInfo.id);
  };

  return (
    <div
      className="w-full py-2 flex gap-2.5 hover:bg-secondary container cursor-pointer"
      onClick={goToDetails}
    >
      <div className="w-[16px] shrink-0 flex items-start pt-0.5">
        {props.isLock && <IoMdLock />}
      </div>
      <div className="w-full flex justify-between gap-2 items-center">
        <div className="w-full flex flex-col gap-0.5">
          <p className="text-xs font-medium">{prospectInfo.fullname}</p>
          {prospectInfo.resume?.title && (
            <p className="text-xxs maxLine-2">{prospectInfo.resume?.title}</p>
          )}
          {prospectInfo.country && (
            <p className="text-xxs text-gray mt-1">{prospectInfo.country}</p>
          )}
        </div>
        <div className="flex items-center shrink-0">
          <IoIosArrowForward className="text-gray" />
        </div>
      </div>
    </div>
  );
};

export default PopularEmployeeItem;
