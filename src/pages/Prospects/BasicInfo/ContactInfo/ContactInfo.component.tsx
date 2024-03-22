import { CONTACT_TYPE } from "~/constants/common";
import { ContactModel } from "~/models";
import useContactInfo from "./ContactInfo.hook";
import { Form, FormField, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { IoMdClose } from "react-icons/io";

interface IProps {
  typeAdding?: CONTACT_TYPE;
  contactId?: ContactModel | null;
  value?: string;
  type?: CONTACT_TYPE;
  data?: ContactModel;
  cancelAdd?: () => void;
  onRefresh?: () => void;
}

const ContactInfo = (props: IProps) => {
  const { form, handleSubmitAdd, isEditing, setEditing } = useContactInfo({
    contactId: props.contactId,
    cancelAdd: props.cancelAdd,
    onRefresh: props.onRefresh,
  });

  if (props.typeAdding) {
    form.setValue("type", props.typeAdding);

    return (
      <div className="w-full flex items-start">
        <div className="shrink-0 w-[50px] flex pt-2">
          <div className="p-[4px] text-[10px] bg-secondary">
            {props.typeAdding === CONTACT_TYPE.EMAIL && "Email"}
            {props.typeAdding === CONTACT_TYPE.PHONE && "Phone"}
          </div>
        </div>

        <div className="w-full flex gap-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitAdd)}>
              <FormField
                name="value"
                control={form.control}
                render={({ field }) => (
                  <>
                    <Input className="h-[35px]" type="text" {...field} />
                    <FormMessage className="errorMessage" />
                  </>
                )}
              />
            </form>
          </Form>
          <Button
            className="shrink-0"
            size={"sm"}
            variant={"ghost"}
            onClick={props.cancelAdd}
          >
            <IoMdClose className="text-lg" />
          </Button>
        </div>
      </div>
    );
  }

  if (isEditing && props.value && props.type) {
    form.setValue("type", props.type);
    form.setValue("value", props.value);

    return (
      <div className="w-full flex items-start">
        <div className="shrink-0 w-[50px] flex pt-2">
          <div className="p-[4px] text-[10px] bg-secondary">
            {props.type === CONTACT_TYPE.EMAIL && "Email"}
            {props.type === CONTACT_TYPE.PHONE && "Phone"}
          </div>
        </div>

        <div className="w-full flex gap-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitAdd)}>
              <FormField
                name="value"
                control={form.control}
                render={({ field }) => (
                  <>
                    <Input className="h-[35px]" type="text" {...field} />
                    <FormMessage className="errorMessage" />
                  </>
                )}
              />
            </form>
          </Form>
          <Button
            className="shrink-0"
            size={"sm"}
            variant={"ghost"}
            onClick={() => setEditing(false)}
          >
            <IoMdClose className="text-lg" />
          </Button>
        </div>
      </div>
    );
  }

  if (!props.value) {
    return (
      <div className="w-full flex items-center">
        <div className="shrink-0 w-[50px] flex">
          <div className="p-[4px] text-[10px] bg-secondary">
            {props.type === CONTACT_TYPE.EMAIL && "Email"}
            {props.type === CONTACT_TYPE.PHONE && "Phone"}
          </div>
        </div>

        <p className="text-xxs text-gray">No data found for now</p>
      </div>
    );
  }

  return (
    <div className="w-full flex items-center">
      <div className="shrink-0 w-[50px] flex">
        <div className="p-[4px] text-[10px] bg-secondary">
          {props.type === CONTACT_TYPE.EMAIL && "Email"}
          {props.type === CONTACT_TYPE.PHONE && "Phone"}
        </div>
      </div>

      <div className="flex w-full justify-between items-center hoverShowButton">
        <p className="text-xxs text-gray">{props.value}</p>
        {/* <Button
          size={"xs"}
          className="text-gray py-1 hidden"
          variant={"ghost"}
          onClick={() => setEditing(true)}
        >
          <FaPencilAlt />
        </Button> */}
      </div>
    </div>
  );
};

export default ContactInfo;
