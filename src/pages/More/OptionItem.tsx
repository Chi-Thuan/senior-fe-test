import { ReactNode } from "react";
import { IconType } from "react-icons";
import { IoOpenOutline } from "react-icons/io5";

interface IProps {
  onClick?: () => void;
  icon?: IconType;
  name: string;
  actionElement?: ReactNode;
  nameElement?: ReactNode;
}
const OptionItem = (props: IProps) => {
  return (
    <div
      className="w-full px-4 py-3 cursor-pointer hover:bg-secondary"
      onClick={props.onClick}
    >
      <div className="w-full flex items-center justify-between gap-2">
        <div className="w-full flex items-center">
          {props.icon && (
            <div className="w-[22px] shrink-0">
              {<props.icon className="text-gray" size={16} />}
            </div>
          )}
          {props.nameElement || <p className="text-xxs ">{props.name}</p>}
        </div>
        <div className="shrink-0">
          {props.actionElement || (
            <IoOpenOutline className="text-gray" size={14} />
          )}
        </div>
      </div>
    </div>
  );
};

export default OptionItem;
