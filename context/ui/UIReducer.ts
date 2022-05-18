import { UIState } from "./";

type UIActionType =
  | { type: "@UI/SIDEBAR/OPEN" }
  | { type: "@UI/SIDEBAR/CLOSE" }
  | { type: "@UI/ADDING/ENTRY"; payload: boolean }
  | { type: "@UI/START/DRAGGIN" }
  | { type: "@UI/END/DRAGGIN" };

const UIReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "@UI/SIDEBAR/OPEN":
      return { ...state, sidemenu: true };
    case "@UI/SIDEBAR/CLOSE":
      return { ...state, sidemenu: false };
    case "@UI/ADDING/ENTRY":
      return { ...state, isAddingEntry: action.payload };
    case "@UI/START/DRAGGIN":
      return { ...state, isDraggin: true };
    case "@UI/END/DRAGGIN":
      return { ...state, isDraggin: false };
    default:
      return state;
  }
};

export default UIReducer;
