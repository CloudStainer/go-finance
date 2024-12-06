import {
  AppBar as MuiAppBar,
  Button,
  Grid,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import {
  APP_URL,
  DOCS_URL,
  Flex,
  IconButton,
  Link,
  MEDIUM_URL,
  GO_TITLE_URL,
  PITCH_DECK_URL,
} from "@gofinance/go-ui";
import MenuIcon from "@material-ui/icons/Menu";
import { useDrawer } from "contexts/DrawerContext";
import { isLocalhost } from "utils/misc";

export const AppBar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggleOpen } = useDrawer();
  const dev = isLocalhost();

  return (
    <MuiAppBar color="transparent" elevation={0} position="static">
      <Toolbar disableGutters>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Flex align="center">
              {mobile && (
                <IconButton onClick={toggleOpen}>
                  <MenuIcon />
                </IconButton>
              )}
              <Link href="/">
                <Flex center>
                  <img
                    src={GO_TITLE_URL}
                    alt="go-logo"
                    height={24}
                    width="auto"
                  />
                </Flex>
              </Link>
            </Flex>
          </Grid>
          {!mobile && (
            <Grid item>
              <Grid container alignItems="center" spacing={4}>
                <Grid item>
                  <Link href={MEDIUM_URL} external>
                    <b>Blog</b>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href={DOCS_URL} external>
                    <b>Docs</b>
                  </Link>
                </Grid>
                <Grid item>
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    target="_blank"
                    href={APP_URL}
                  >
                    Launch App
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
};
