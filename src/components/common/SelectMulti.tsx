import Select, { MultiValue } from "react-select";

export interface IMultiSelectOption {
  label: string;
  value: any;
}

interface IProps {
  placeholder?: string;
  options: Array<IMultiSelectOption>;
  onChange?: (value: MultiValue<IMultiSelectOption>) => void;
}
const SelectMulti = (props: IProps) => {
  return (
    <div className="px-[1px]">
      <Select
        isMulti
        placeholder={props.placeholder}
        options={props.options}
        onChange={props.onChange}
      />
    </div>
  );
};

export default SelectMulti;
