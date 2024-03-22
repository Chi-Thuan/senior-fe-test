import { IoSearch } from "react-icons/io5";
import useSearch from "./Search.hook";
import ButtonTab from "../../components/common/ButtonTab";
import { FaUserFriends } from "react-icons/fa";
import { SEARCH_TYPE } from "~/constants/common";
import { BsBuildings } from "react-icons/bs";
import ContactTab from "./ContactTab/ContactTab.component";
import CompanyTab from "./CompanyTab/CompanyTab.component";

const Search = () => {
  const { currTab, setTab } = useSearch();

  return (
    <div className="w-full h-full flex flex-col">
      <p className="container text-xl font-medium flex items-center gap-4 py-3">
        <IoSearch size={20} />
        Search
      </p>
      <div className="h-full w-full flex flex-col overflow-hidden">
        <div className="container border-b border-secondary flex gap-3">
          <ButtonTab
            onClick={() => setTab(SEARCH_TYPE.CONTACT)}
            active={currTab === SEARCH_TYPE.CONTACT}
            icon={FaUserFriends}
            name="Contacts"
          />
          <ButtonTab
            onClick={() => setTab(SEARCH_TYPE.COMPANY)}
            active={currTab === SEARCH_TYPE.COMPANY}
            icon={BsBuildings}
            name="Companies"
          />
        </div>
        <div className="w-full h-full pt-4 overflow-hidden">
          {currTab === SEARCH_TYPE.CONTACT && <ContactTab />}
          {currTab === SEARCH_TYPE.COMPANY && <CompanyTab />}
        </div>
      </div>
    </div>
  );
};

export default Search;
