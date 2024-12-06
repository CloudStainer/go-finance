import {
  Box,
  Button,
  Divider,
  List,
  makeStyles,
  SwipeableDrawer,
} from "@material-ui/core";
import {
  Flex,
  MEDIUM_URL,
  DOCS_URL,
  GO_LOGO_URL,
  PITCH_DECK_URL,
  TelegramButton,
  TwitterButton,
  MediumButton,
} from "@gofinance/go-ui";
import { FC } from "react";
import { AppDrawerItem } from "./AppDrawerItem";
import HomeIcon from "@material-ui/icons/Home";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
}));

export interface AppDrawerProps {
  open: boolean;
  toggleOpen: (open: boolean) => void;
}

export const AppDrawer: FC<AppDrawerProps> = ({ open, toggleOpen }) => {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      anchor="left"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      open={open}
      onOpen={() => toggleOpen(true)}
      onClose={() => toggleOpen(false)}
    >
      <Flex column grow={1}>
        <Box m={4} mb={4}>
          <Flex center>
            <img
              src={GO_LOGO_URL}
              alt="go-finance-logo"
              width={150}
              height="auto"
            />
          </Flex>
        </Box>
        <List>
          <Divider />
          <AppDrawerItem href="/" icon={<HomeIcon />}>
            Home
          </AppDrawerItem>
          <AppDrawerItem href={MEDIUM_URL} icon={<RssFeedIcon />} external>
            Blog
          </AppDrawerItem>
          <AppDrawerItem href={DOCS_URL} icon={<AssignmentIcon />} external>
            Docs
          </AppDrawerItem>
        </List>
        <Box my={1} mx={2}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            target="_blank"
            href={PITCH_DECK_URL}
          >
            Learn More
          </Button>
        </Box>
      </Flex>

      <Divider variant="middle" />
      <Box my={2}>
        <Flex center>
          <TelegramButton />
          <TwitterButton />
          <MediumButton />
        </Flex>
      </Box>
    </SwipeableDrawer>
  );
};
