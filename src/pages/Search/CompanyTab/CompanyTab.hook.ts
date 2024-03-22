import { ChangeEvent, useState } from "react";
import { MOCK_COMPANIES } from "~/__mocks__";
import { INDEXED_DB } from "~/constants/common";
import { fake_call_api } from "~/helpers/common.helper";
import { indexedDatabase } from "~/helpers/indexedDB";
import { useDebounce, useReactQuery } from "~/hooks";
import { CompanyModel } from "~/models";

const useCompanyTab = () => {
  const [textSearch, setTextSearch] = useState("");

  const handleSearchChange = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value);
  }, 500);

  const { isLoading, data } = useReactQuery<CompanyModel[]>({
    queryKey: ["search", textSearch],
    queryFn: async () => {
      if (!textSearch?.trim()) {
        const _recentSearch: CompanyModel[] = await indexedDatabase(
          INDEXED_DB.TABLE.RECENT_COMPANIES
        ).findMany({});
        return _recentSearch;
      }
      const data = await fake_call_api<CompanyModel[]>(
        () => {
          if (textSearch?.toLocaleLowerCase()?.trim() === "all") {
            return MOCK_COMPANIES;
          }

          return MOCK_COMPANIES.filter((e) =>
            e.name
              ?.toLocaleLowerCase()
              .includes(textSearch?.toLocaleLowerCase())
          );
        },
        {
          delay: 300,
        }
      );
      return data;
    },
  });

  return {
    textSearch,
    handleSearchChange,
    isLoading,
    data,
  };
};

export default useCompanyTab;
