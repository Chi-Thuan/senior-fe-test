import { CompanyModel } from "~/models";
import ResultSearchItem from "./ResultSearchItem";

interface IProps {
  textSearch: string;
  data: CompanyModel[];
}
const ResultSearch = (props: IProps) => {
  if (!props.textSearch && !props.data.length) {
    return <></>;
  }

  return (
    <div className="w-full h-full flex flex-col gap-2">
      {!props.textSearch && (
        <p className="container text-md font-medium">Recent searchs</p>
      )}
      {props.data.length ? (
        <div className="w-full h-full flex flex-col overflow-auto">
          {props.data.map((e) => (
            <ResultSearchItem data={e} key={e.id} />
          ))}
        </div>
      ) : (
        <div className="container grow flex justify-center items-center">
          <p className="text-md text-gray">No data</p>
        </div>
      )}
    </div>
  );
};

export default ResultSearch;
