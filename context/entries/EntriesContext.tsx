import { createContext } from "react";

export interface EntriesContextProps {}

const EntriesContext = createContext({} as EntriesContextProps);

export default EntriesContext;
