import { EntriesState } from "./";

type EntriesActionType = { type: "DEFAULT_TYPE" };

const EntriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "DEFAULT_TYPE":
      return { ...state };
    default:
      return state;
  }
};

export default EntriesReducer;
