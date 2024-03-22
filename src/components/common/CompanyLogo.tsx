import { getImage } from "~/helpers/common.helper";
import { MediaModel } from "~/models";

interface IProps {
  thumbnail?: MediaModel;
  name: string;
  url: string;
}
const CompanyLogo = (props: IProps) => {
  return (
    <div className="w-full container flex gap-2 pt-3">
      <div className="w-[40px] h-[32px] shrink-0 flex justify-center items-center">
        <img
          src={getImage(props.thumbnail?.src)}
          alt={props.thumbnail?.alt || "Logo"}
          className="image-w"
        />
      </div>
      <div className="w-full flex items-center gap-2">
        <a href={props.url} className="text-md font-medium" target="_blank">
          {props.name}
        </a>
      </div>
    </div>
  );
};

export default CompanyLogo;
