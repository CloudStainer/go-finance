import { Box, Grid, makeStyles, Toolbar } from "@material-ui/core";
import {
  Flex,
  Link,
  MediumButton,
  GO_LOGO_DARK_URL,
  TelegramButton,
  TwitterButton,
} from "@gofinance/go-ui";
import { useMobile } from "@gofinance/go-ui";

const useStyles = makeStyles((theme) => ({
  image: {
    opacity: 0.55,
  },
}));

export const Footer = () => {
  const classes = useStyles();
  const mobile = useMobile();

  return (
    <Box mb={2}>
      <Toolbar disableGutters>
        <Grid container alignItems="center" justify="space-between">
          <Grid item xs={12} md={6}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justify={mobile ? "center" : "flex-start"}
            >
              <Grid item xs={12} md={2}>
                <Flex center>
                  <img
                    src={GO_LOGO_DARK_URL}
                    alt="go-logo"
                    height={22}
                    width="auto"
                    className={classes.image}
                  />
                </Flex>
              </Grid>

              <Grid item>
                <Link href="/">Home</Link>
              </Grid>
              <Grid item>
                <Link href="/contact">Contact</Link>
              </Grid>
              <Grid item>
                <Link href="/terms">Terms</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Flex align="center" justify={mobile ? "center" : "flex-end"}>
              <TelegramButton />
              <TwitterButton />
              <MediumButton />
            </Flex>
          </Grid>
        </Grid>
      </Toolbar>
    </Box>
  );
};
