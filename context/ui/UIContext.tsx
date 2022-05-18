import { createContext } from "react";

export interface UIContextProps {
  sidemenu: boolean;
  isAddingEntry: boolean;
  isDraggin: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  startDraggin: () => void;
  endDraggin: () => void;
}

const UIContext = createContext({} as UIContextProps);

export default UIContext;
