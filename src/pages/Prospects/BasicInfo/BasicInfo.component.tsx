import { getImage } from "~/helpers/common.helper";
import useBasicInfo from "./BasicInfo.hook";
import { Button } from "~/components/ui/button";
import ContactInfo from "./ContactInfo/ContactInfo.component";
import { CONTACT_TYPE } from "~/constants/common";
import { FaPlus } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const BasicInfo = () => {
  const {
    isAdding,
    isCanAddEmail,
    isCanAddPhone,
    isShowSaveContact,
    contacts,
    prospectInfo,
    handleAddContact,
    handleRefresh,
    handleSaveProspect,
  } = useBasicInfo();

  if (!prospectInfo) {
    return <></>;
  }

  return (
    <div className="w-full bg-white py-3">
      <div className="w-full container">
        <div className="w-full flex gap-2.5 items-center">
          <div className="w-[32px] h-[32px] shrink-0 rounded-full overflow-hidden">
            <img
              className="image-cover"
              src={getImage(prospectInfo?.avatar?.src)}
              alt={prospectInfo?.avatar?.alt || "Avatar"}
            />
          </div>
          <p className="text-md font-medium">{prospectInfo?.fullname || ""}</p>
        </div>

        {isShowSaveContact && (
          <div className="w-full flex justify-between mt-5 gap-2">
            <Button
              size={"sm"}
              variant={"outline"}
              onClick={handleSaveProspect}
            >
              Save contact
            </Button>

            <Button size={"sm"} variant={"secondary"}>
              <img
                className="w-[16px] h-[16px]"
                src="https://static-assets.lusha.com/integrations/icons/lusha.svg"
                alt="logo"
              />
            </Button>
          </div>
        )}

        <div className="w-full flex flex-col mt-4 gap-3">
          {contacts.map((e, i) => (
            <ContactInfo
              type={e.type}
              key={`${i}${e.id}${e.type || "type"}`}
              value={e.value}
              contactId={e.contactId || null}
              onRefresh={handleRefresh}
            />
          ))}
          {isAdding && (
            <ContactInfo
              typeAdding={isAdding}
              cancelAdd={() => handleAddContact(null)}
              onRefresh={handleRefresh}
            />
          )}
        </div>
      </div>

      {!isAdding && (isCanAddEmail || isCanAddPhone) && (
        <div className="container w-full mt-3 border-t">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"primaryHover"} size={"sm"} className="mt-3">
                <FaPlus className="mr-2" /> Add contact details
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[150px]">
              <DropdownMenuItem
                className="flex"
                disabled={!isCanAddEmail}
                onClick={() => handleAddContact(CONTACT_TYPE.EMAIL)}
              >
                <div className="shrink-0 w-[30px]">
                  <MdOutlineMail />
                </div>
                Email
              </DropdownMenuItem>
              <DropdownMenuItem
                disabled={!isCanAddPhone}
                defaultValue={CONTACT_TYPE.PHONE}
                className="flex "
                onClick={() => handleAddContact(CONTACT_TYPE.PHONE)}
              >
                <div className="shrink-0 w-[30px]">
                  <FiPhone />
                </div>
                Phone
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default BasicInfo;
