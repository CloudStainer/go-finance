import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@gofinance/go-ui";
import { FC } from "react";
import { DrawerProvider } from "contexts/DrawerContext";

const Providers: FC = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <DrawerProvider>{children}</DrawerProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default Providers;
