import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { useRouter } from "~/hooks";
import { cn } from "~/lib/utils";

interface IProps {
  icon: IconType;
  iconActive?: IconType;
  name: string;
  link: string;
}
const MenuItem = (props: IProps) => {
  const { location } = useRouter();

  const paths = location.pathname.split("/").join("");
  const _url = props.link.replace("/", "");
  const isActive =
    location.pathname === props.link || (_url && paths.includes(_url));

  const linkClass = cn(
    "hover:text-primary hover:[&*]:text-primary w-full flex flex-col items-center pt-2",
    {
      "[&>svg]:fill-primary [&>svg]:text-primary": isActive,
      "[&>p]:text-primary": isActive,
    }
  );

  return (
    <Link to={props.link} className={linkClass}>
      {props.iconActive && isActive ? (
        <props.iconActive className="text-gray" size={18} />
      ) : (
        <props.icon className="text-gray" size={18} />
      )}
      <p className="text-xxs font-medium mt-0.5 text-gray">{props.name}</p>
    </Link>
  );
};

export default MenuItem;
