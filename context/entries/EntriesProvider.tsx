import { FC, ReactNode, useReducer } from "react";
import { EntriesContext, EntriesReducer } from "./";

export interface EntriesState {
  entries: [];
}

const INITIAL_STATE: EntriesState = {
  entries: [],
};

const EntriesProvider: FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
