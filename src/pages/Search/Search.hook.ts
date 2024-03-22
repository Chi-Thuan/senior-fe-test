import { useState } from "react";
import { SEARCH_TYPE } from "~/constants/common";

const useSearch = () => {
  const [currTab, setTab] = useState<SEARCH_TYPE>(SEARCH_TYPE.CONTACT);

  return {
    currTab,
    setTab,
  };
};

export default useSearch;
