import { IconType } from "react-icons";
import { ReadMore } from "~/components/common";

interface IInfoItemProps {
  hidden?: boolean;
  icon?: IconType;
  name?: string;
  value?: string;
  valueElement?: React.ReactNode;
}
const InfoItem = (props: IInfoItemProps) => {
  if (props.hidden) {
    return <></>;
  }

  return (
    <div className="w-full border-b last:border-0 border-secondary py-3 flex gap-2.5">
      {props.icon && (
        <div className="w-[16px] shrink-0">
          {<props.icon className="text-gray" size={16} />}
        </div>
      )}

      <div className="w-full flex flex-col gap-0.5">
        {props.name && (
          <p className="text-xxs text-gray font-medium">{props.name}</p>
        )}
        {props.valueElement ? (
          props.valueElement
        ) : (
          <ReadMore
            className="text-xs text-black"
            hidden={!props.value}
            content={props.value}
            length={168}
          />
        )}
      </div>
    </div>
  );
};

InfoItem.Company = () => {
  return (
    <div className="w-full border-b last:border-0 border-secondary py-3 flex gap-2.5">
      InfoItem company
    </div>
  );
};

export default InfoItem;
