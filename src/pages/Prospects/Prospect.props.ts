import { Dispatch, SetStateAction } from "react";
import { ProspectModel } from "~/models";

export interface IProspectContext {
  refresh: boolean;
  prospectInfo: ProspectModel | null;
  setProspectInfo: Dispatch<SetStateAction<ProspectModel | null>>;
  onRefreshToggle: () => void;
}
