import { ReactNode } from "react";

interface IProps {
  name?: string;
  children?: ReactNode;
}
const SectionWrapper = (props: IProps) => {
  return (
    <div className="w-full bg-white rounded-lg border border-gray2 overflow-hidden">
      {props.name && (
        <p className="text-xxs px-4 font-medium py-3 border-b border-secondary">
          {props.name}
        </p>
      )}

      <div className="w-full">{props.children}</div>
    </div>
  );
};

export default SectionWrapper;
