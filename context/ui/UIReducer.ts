import { UIState } from "./";

type UIActionType =
  | { type: "@UI/SIDEBAR/OPEN" }
  | { type: "@UI/SIDEBAR/CLOSE" };

const UIReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "@UI/SIDEBAR/OPEN":
      return { ...state, sidemenu: true };
    case "@UI/SIDEBAR/CLOSE":
      return { ...state, sidemenu: false };
    default:
      return state;
  }
};

export default UIReducer;
