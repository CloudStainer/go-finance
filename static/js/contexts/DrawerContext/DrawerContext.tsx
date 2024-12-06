import { createContext } from "react";

export interface IDrawerContext {
  isOpen?: boolean;
  toggleOpen?: () => void;
}

export const DrawerContext = createContext<IDrawerContext>({});
