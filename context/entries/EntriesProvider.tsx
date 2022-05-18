import { FC, ReactNode, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { Entry } from "../../interfaces";
import { EntriesContext, EntriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Cillum ut eu qui non elit nostrud consectetur adipisicing sunt anim dolore ad voluptate do.",
      status: "pending",
      createtAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "Velit anim consequat labore exercitation amet reprehenderit pariatur esse ea velit ad excepteur elit tempor.",
      status: "in-progress",
      createtAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "Sint quis cupidatat officia proident anim aute.",
      status: "finished",
      createtAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        "Ad sint consectetur veniam dolor aliquip est commodo sunt minim sit ipsum magna fugiat laboris.",
      status: "pending",
      createtAt: Date.now() - 100000,
    },
  ],
};

const EntriesProvider: FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, INITIAL_STATE);

  const addEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createtAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "@ENTRY/ADD", payload: newEntry });
  };

  const entryUpdate = (entry: Entry) => {
    dispatch({ type: "@ENTRY/UPDATE", payload: entry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addEntry, entryUpdate }}>
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
