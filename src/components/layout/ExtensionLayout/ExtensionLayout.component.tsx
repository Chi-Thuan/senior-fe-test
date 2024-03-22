import { RiSubtractFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import { Button } from "~/components/ui/button";
import MenuItem from "./MenuItem";
import useExtensionLayout from "./ExtensionLayout.hook";
import { IoIosArrowBack } from "react-icons/io";

const ExtensionLayout = () => {
  const { listMenu, isShowBackButton, goBack } = useExtensionLayout();

  return (
    <div className="h-full full flex flex-col overflow-hidden">
      <div className="bg-secondary w-full shrink-0">
        <div className="w-full container min-h-[38px] py-1 flex items-center justify-between">
          <div className="shrink-0 flex items-center">
            {isShowBackButton && (
              <Button
                onClick={goBack}
                size={"sm"}
                variant={"secondary"}
                className="pl-0 border-r rounded-none py-0 h-[30px] mr-3"
              >
                <IoIosArrowBack className="text-lg" />
              </Button>
            )}
            <Link to={"/"}>
              <div className="h-[21px]">
                <img
                  className="image-h"
                  src="https://static-assets.lusha.com/plugin/icons/PluginHeaderLushaLogo.svg"
                  alt="icon"
                />
              </div>
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <Button
              size={"xs"}
              variant={"primaryHover"}
              className="font-semibold py-1"
            >
              Free credits
            </Button>
            <Button size={"sm"} variant={"secondary"}>
              <RiSubtractFill />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full grow overflow-auto bg-white">
        <Outlet />
      </div>
      <div className="w-full shrink-0 shadow-nav">
        <div className="container pb-2 w-full flex gap-2">
          {listMenu.map((e, i) => (
            <MenuItem
              key={i}
              link={e.link}
              icon={e.icon}
              iconActive={e.iconActive}
              name={e.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtensionLayout;
