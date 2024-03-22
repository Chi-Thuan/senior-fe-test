import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { IProspectContext } from "./Prospect.props";
import { ProspectModel } from "~/models";

export const ProspectsContext = createContext<IProspectContext | null>(null);

export const ProspectsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [prospectInfo, setProspectInfo] = useState<ProspectModel | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  const prospectInfoString = JSON.stringify(prospectInfo || null);
  const onRefreshToggle = useCallback(() => setRefresh(!refresh), [refresh]);

  const contextValue = useMemo(() => {
    const _prospectInfo = JSON.parse(prospectInfoString);

    return {
      refresh,
      prospectInfo: _prospectInfo,
      setProspectInfo,
      onRefreshToggle,
    };
  }, [prospectInfoString]);

  return (
    <ProspectsContext.Provider value={contextValue}>
      {children}
    </ProspectsContext.Provider>
  );
};

export const useProspectsContext = () => {
  const ctx = useContext(ProspectsContext);

  if (!ctx) {
    throw new Error("ProspectsContext is not found");
  }

  return ctx;
};
