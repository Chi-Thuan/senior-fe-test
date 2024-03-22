import { useRouter } from "~/hooks";
import { ProspectModel } from "~/models";

interface IProps {
  data: ProspectModel;
}
const SavedItem = (props: IProps) => {
  const { navigate } = useRouter();
  const prospectInfo = props.data;

  const goToDetails = () => {
    navigate("/search/prospect/" + prospectInfo.id);
  };

  return (
    <div
      className="container hover:bg-secondary cursor-pointer"
      onClick={goToDetails}
    >
      <div className="w-full py-3 border-b border-secondary">
        <p className="text-xs font-medium">{prospectInfo.fullname}</p>
        <p className="text-xxs">{prospectInfo.resume?.title || ""}</p>
        <p className="text-xs text-primary font-medium mt-1">
          {prospectInfo.company?.name || ""}
        </p>
      </div>
    </div>
  );
};

export default SavedItem;
