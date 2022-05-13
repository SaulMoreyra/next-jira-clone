import { FC, ReactNode, useCallback, useReducer } from "react";
import { UIContext, UIReducer } from "./";

export interface UIState {
  sidemenu: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenu: false,
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

  return (
    <UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
