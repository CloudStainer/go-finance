import { Container, makeStyles } from "@material-ui/core";
import { Display } from "@gofinance/go-ui";
import { Footer } from "components/Footer";
import { AppBar } from "components/AppBar";
import { Particles } from "components/Particles";
import { FC } from "react";

const useStyles = makeStyles((theme) => ({
  display: {
    overflow: "hidden",
  },
}));

export const AppContainer: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container>
      <Particles />

      <Display className={classes.display}>
        <AppBar />
        {children}
        <Footer />
      </Display>
    </Container>
  );
};
