import { createContext } from "react";
import { Entry } from "../../interfaces";

export interface EntriesContextProps {
  entries: Entry[];
  addEntry: (description: string) => void;
  entryUpdate: (entry: Entry) => void;
}

const EntriesContext = createContext({} as EntriesContextProps);

export default EntriesContext;
