import { FC, ReactNode, useCallback, useReducer } from "react";
import { UIContext, UIReducer } from "./";

export interface UIState {
  sidemenu: boolean;
  isAddingEntry: boolean;
  isDraggin: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenu: false,
  isAddingEntry: false,
  isDraggin: false,
};

const UIProvider: FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSideMenu = useCallback(
    () => dispatch({ type: "@UI/SIDEBAR/OPEN" }),
    []
  );

  const closeSideMenu = useCallback(
    () => dispatch({ type: "@UI/SIDEBAR/CLOSE" }),
    []
  );

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: "@UI/ADDING/ENTRY", payload: isAdding });
  };

  const startDraggin = () => {
    dispatch({ type: "@UI/START/DRAGGIN" });
  };
  const endDraggin = () => {
    dispatch({ type: "@UI/END/DRAGGIN" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        startDraggin,
        endDraggin,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
