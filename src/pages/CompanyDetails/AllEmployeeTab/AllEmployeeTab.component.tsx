import { PopularEmployeeItem } from "~/components/common";
import { ProspectModel } from "~/models";

interface IProps {
  data: ProspectModel[];
}
const AllEmployeeTab = (props: IProps) => {
  if (!props.data.length) {
    return (
      <div className="w-full h-full flex items-center container justify-center">
        <p className="text-gray text-xs">No data</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      {props.data.map((e) => (
        <PopularEmployeeItem key={e.id} data={e} isLock={e.id % 2 == 0} />
      ))}
    </div>
  );
};

export default AllEmployeeTab;
