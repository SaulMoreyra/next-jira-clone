import { createContext } from "react";

export interface UIContextProps {
  sidemenu: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

const UIContext = createContext({} as UIContextProps);

export default UIContext;
