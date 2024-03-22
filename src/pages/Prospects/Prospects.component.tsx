import { Skeleton } from "~/components/ui/skeleton";
import BasicInfo from "./BasicInfo/BasicInfo.component";
import { ProspectsContextProvider } from "./Prospects.context";
import ResumeInfo from "./ResumeInfo/ResumeInfo.component";
import useProspect from "./prospect.hook";

interface IProps {
  initProspectId?: string;
}
const Prospects = (props: IProps) => {
  const { isLoading } = useProspect({
    initProspectId: props.initProspectId,
  });

  if (isLoading) {
    return (
      <div className="w-full h-full flex flex-col py-3">
        <Skeleton className="w-full h-[100px]" />
        <Skeleton className="w-full grow mt-2" />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-secondary">
      <BasicInfo />
      <div className="w-full pt-4">
        <ResumeInfo />
      </div>
    </div>
  );
};

const ProspectsContainer = (props: IProps) => {
  return (
    <ProspectsContextProvider>
      <Prospects {...props} />
    </ProspectsContextProvider>
  );
};

export default ProspectsContainer;
