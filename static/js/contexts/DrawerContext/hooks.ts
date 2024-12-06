import { useContext } from "react";
import { DrawerContext } from "./DrawerContext";

export const useDrawer = () => {
  const { isOpen, toggleOpen } = useContext(DrawerContext);

  return {
    isOpen,
    toggleOpen,
  };
};
