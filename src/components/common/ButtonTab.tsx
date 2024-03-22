import { IconType } from "react-icons";
import { cn } from "~/lib/utils";

interface IProps {
  active?: boolean;
  icon?: IconType;
  name: string;
  onClick: () => void;
}
const ButtonTab = (props: IProps) => {
  const buttonClass = cn(
    "flex items-center px-2 pt-3 pb-1 hover:opacity-100 gap-1 cursor-pointer border-b-4 opacity-40 border-transparent font-medium text-xs",
    {
      "opacity-100 border-primary": props.active,
    }
  );

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.icon && <props.icon />}
      {props.name}
    </button>
  );
};

export default ButtonTab;
