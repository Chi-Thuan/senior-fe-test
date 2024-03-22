import { IoIosArrowForward } from "react-icons/io";
import { INDEXED_DB } from "~/constants/common";
import { getImage } from "~/helpers/common.helper";
import { indexedDatabase } from "~/helpers/indexedDB";
import { useRouter } from "~/hooks";
import { CompanyModel } from "~/models";

interface IProps {
  data: CompanyModel;
}
const ResultSearchItem = (props: IProps) => {
  const { navigate } = useRouter();

  const goToDetails = () => {
    navigate("/search/company/" + props.data?.id);

    indexedDatabase(INDEXED_DB.TABLE.RECENT_COMPANIES)
      .findMany({ id: props.data?.id })
      .then((data) => {
        if (!data?.length) {
          indexedDatabase(INDEXED_DB.TABLE.RECENT_COMPANIES).create({
            data: props.data,
          });
        }
      });
  };

  return (
    <div
      className="container w-full border-b last:border-0 border-secondary py-3 flex gap-3 items-center hover:bg-secondary cursor-pointer"
      onClick={goToDetails}
    >
      <div className="w-[32px] h-[32px] shrink-0 flex items-center">
        <img
          className="image-w"
          src={getImage(props.data?.thumbnail?.src)}
          alt={props.data?.thumbnail?.alt || ""}
        />
      </div>
      <div className="w-full flex items-center">
        <div className="w-full flex flex-col">
          <p className="text-xs font-medium">{props.data?.name}</p>
          <p className="text-xs text-gray">{props.data?.url}</p>
        </div>
        <div className="flex items-center shrink-0">
          <IoIosArrowForward className="text-gray" />
        </div>
      </div>
    </div>
  );
};

export default ResultSearchItem;
