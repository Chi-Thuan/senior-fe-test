import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";
import { IconType } from "react-icons";
import { IoSearch } from "react-icons/io5";
import { SelectMulti } from "~/components/common";
import { FormField, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";

interface IProps {
  icon: IconType;
  name: string;
  children?: ReactNode;
  placeholder?: string;
  fieldName?: string;
  form?: UseFormReturn;
}
const SearchContactItem = (props: IProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center">
        <div className="w-[25px] shrink-0 flex items-center">
          <props.icon className="text-primary" size={16} />
        </div>
        <p className="text-xs">{props.name}</p>
      </div>
      <div className="w-full nt-2">{props.children}</div>
    </div>
  );
};

interface ISearchContactItemInput extends IProps {}
SearchContactItem.Input = (props: ISearchContactItemInput) => {
  const { form, fieldName } = props;
  return (
    <SearchContactItem icon={props.icon} name={props.name}>
      <div className="relative">
        <IoSearch
          size={18}
          className="absolute top-[12px] left-[10px] text-gray"
        />
        {!form || !fieldName ? (
          <Input className="pl-[40px]" placeholder={props.placeholder} />
        ) : (
          <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
              <div className="w-full">
                <Input
                  className="pl-[40px]"
                  placeholder={props.placeholder}
                  {...field}
                />
                <FormMessage className="errorMessage" />
              </div>
            )}
          />
        )}
      </div>
    </SearchContactItem>
  );
};

interface ISearchContactItemSelect extends IProps {
  options: Array<{ label: string; value: any }>;
}
SearchContactItem.Select = (props: ISearchContactItemSelect) => {
  const { form, fieldName } = props;

  return (
    <SearchContactItem icon={props.icon} name={props.name}>
      {!form || !fieldName ? (
        <SelectMulti options={props.options} />
      ) : (
        <div className="w-full">
          <FormField
            name={fieldName}
            control={form.control}
            render={() => (
              <>
                <SelectMulti
                  placeholder={props.placeholder}
                  options={props.options}
                  onChange={(options) => {
                    const values = options.map((e) => e.value);
                    form?.setValue(fieldName!, values);
                    if (values.length) {
                      form.clearErrors(fieldName);
                    }
                  }}
                />
                <FormMessage className="errorMessage" />
              </>
            )}
          />
        </div>
      )}
    </SearchContactItem>
  );
};

export default SearchContactItem;
