import { AppDrawer } from "components/AppDrawer";
import { useState } from "react";
import { DrawerContext } from "./DrawerContext";

export const DrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <DrawerContext.Provider
      value={{
        isOpen: open,
        toggleOpen: () => setOpen(!open),
      }}
    >
      <AppDrawer open={open} toggleOpen={(o) => setOpen(o)} />
      {children}
    </DrawerContext.Provider>
  );
};
