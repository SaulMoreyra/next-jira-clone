import { useContext } from "react";
import { UIContext } from "../context/ui";

const useUi = () => {
  const context = useContext(UIContext);
  return context;
};

export default useUi;
