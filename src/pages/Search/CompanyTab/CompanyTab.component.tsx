import { IoSearch } from "react-icons/io5";
import { Input } from "~/components/ui/input";
import RecentSearch from "./ResultSearch/ResultSearch.component";
import useCompanyTab from "./CompanyTab.hook";
import { Skeleton } from "~/components/ui/skeleton";

const CompanyTab = () => {
  const { isLoading, textSearch, data, handleSearchChange } = useCompanyTab();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="container">
        <div className="relative">
          <IoSearch
            size={18}
            className="absolute top-2/4 -translate-y-2/4 left-[10px] text-gray"
          />
          <Input
            className="pl-[40px]"
            type="text"
            placeholder="Enter 'all' or 'inter'"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="w-full h-full overflow-hidden mt-4">
        {isLoading ? (
          <div className="container flex flex-col gap-2">
            <Skeleton className="w-full h-[60px]" />
            <Skeleton className="w-full h-[60px]" />
            <Skeleton className="w-full h-[60px]" />
            <Skeleton className="w-full h-[60px]" />
            <Skeleton className="w-full h-[60px]" />
            <Skeleton className="w-full h-[60px]" />
          </div>
        ) : (
          <RecentSearch textSearch={textSearch} data={data || []} />
        )}
      </div>
    </div>
  );
};

export default CompanyTab;
