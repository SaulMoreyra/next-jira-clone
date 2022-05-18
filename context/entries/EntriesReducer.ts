import { Entry } from "../../interfaces";
import { EntriesState } from "./";

type EntriesActionType =
  | { type: "@ENTRY/ADD"; payload: Entry }
  | { type: "@ENTRY/UPDATE"; payload: Entry };

const EntriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "@ENTRY/ADD":
      return { ...state, entries: [...state.entries, action.payload] };
    case "@ENTRY/UPDATE":
      return {
        ...state,
        entries: state.entries.map((entry) =>
          entry._id === action.payload._id ? action.payload : entry
        ),
      };
    default:
      return state;
  }
};

export default EntriesReducer;
