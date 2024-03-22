import { Button } from "~/components/ui/button";
import { MdWorkOutline } from "react-icons/md";
import SearchContactItem from "./SearchContactItem";
import { CiLocationOn } from "react-icons/ci";
import useContactTab from "./ContactTab.hook";
import { Form } from "~/components/ui/form";
import { MOCK_SEARCH_OPTIONS } from "~/__mocks__";

const ContactTab = () => {
  const { form, handleSubmit, isCanSubmit } = useContactTab();

  return (
    <Form {...form}>
      <div className="container w-full h-full flex flex-col">
        <div className="w-full h-full overflow-hidden">
          <div className="h-full flex flex-col gap-4 overflow-auto">
            <SearchContactItem.Input
              icon={MdWorkOutline}
              name="Job title"
              placeholder="Enter Job title"
              fieldName="title"
              form={form}
            />
            <SearchContactItem.Select
              icon={CiLocationOn}
              name="Contact location"
              placeholder="Enter Contact location"
              options={MOCK_SEARCH_OPTIONS.COUNTRY}
              fieldName="location"
              form={form}
            />
            <SearchContactItem.Select
              icon={CiLocationOn}
              name="Seniorty"
              placeholder="Enter Seniorty"
              options={MOCK_SEARCH_OPTIONS.SENIORTY}
              fieldName="seniorty"
              form={form}
            />
            <SearchContactItem.Select
              icon={CiLocationOn}
              name="Department"
              placeholder="Enter Department"
              options={MOCK_SEARCH_OPTIONS.DEPARTMENT}
              fieldName="department"
              form={form}
            />
            <SearchContactItem.Select
              icon={CiLocationOn}
              name="Industry"
              placeholder="Enter Industry"
              options={MOCK_SEARCH_OPTIONS.INDUSTRY}
              fieldName="industry"
              form={form}
            />
            <SearchContactItem.Select
              icon={CiLocationOn}
              name="Sub Industry"
              placeholder="Enter Sub Industry"
              options={MOCK_SEARCH_OPTIONS.INDUSTRY}
              fieldName="subIndustry"
              form={form}
            />
          </div>
        </div>
        <div className="w-full flex gap-3 py-3 shrink-0">
          <Button className="w-full" variant="primaryHover" size={"sm"}>
            Advance search
          </Button>
          <Button
            disabled={!isCanSubmit}
            className="w-full"
            size={"sm"}
            onClick={handleSubmit}
          >
            Search
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default ContactTab;
