import { FC, ReactNode, useReducer, useEffect } from "react";
import { EntriesApi } from "../../apis";
import { Entry } from "../../interfaces";
import { IEntry } from "../../models";
import { EntriesContext, EntriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const INITIAL_STATE: EntriesState = {
  entries: [],
};

const EntriesProvider: FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, INITIAL_STATE);

  const addEntry = async (description: string) => {
    try {
      const { data } = await EntriesApi.post<Entry>("/entries", {
        description,
      });
      dispatch({ type: "@ENTRY/ADD", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const entryUpdate = async ({ _id, description, status }: Entry) => {
    try {
      const { data } = await EntriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });
      dispatch({ type: "@ENTRY/UPDATE", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refreshEntries = async () => {
    const { data } = await EntriesApi.get<Entry[]>("/entries");
    dispatch({ type: "@ENTRY/INITIAL", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider value={{ ...state, addEntry, entryUpdate }}>
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
