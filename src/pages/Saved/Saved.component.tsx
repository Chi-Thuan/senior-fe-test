import { IoOpenOutline } from "react-icons/io5";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import SavedItem from "./SavedItem";
import useSaved from "./Saved.hook";
import { Skeleton } from "~/components/ui/skeleton";

const Saved = () => {
  const { isLoading, data } = useSaved();

  return (
    <div className="w-full h-full flex flex-col bg-secondary overflow-hidden">
      <div className="container bg-white w-full flex flex-col pt-3 pb-4">
        <p className="text-xl font-medium flex items-center gap-4">
          Recently saved
        </p>
        <div className="w-full mt-3 flex items-center">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="banana">All Contacts</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant={"link"} className="shrink-0 font-mediyn==um">
            View all
            <IoOpenOutline className="ml-2" />
          </Button>
        </div>
      </div>
      <div className="w-full h-full bg-white mt-4 overflow-auto">
        {isLoading ? (
          <div className="flex flex-col container gap-2 pt-4">
            <Skeleton className="w-full h-[80px]" />
            <Skeleton className="w-full h-[80px]" />
            <Skeleton className="w-full h-[80px]" />
            <Skeleton className="w-full h-[80px]" />
          </div>
        ) : data?.length ? (
          data?.map((e) => <SavedItem key={e.id} data={e} />)
        ) : (
          <p className="container w-full h-full flex items-center justify-center text-md text-gray">
            No data
          </p>
        )}
      </div>
    </div>
  );
};

export default Saved;
