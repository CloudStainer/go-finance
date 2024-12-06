import {
  ListItem,
  ListItemIcon,
  ListItemProps,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { FC, ReactElement, ReactNode } from "react";
import { FaHome } from "react-icons/fa";
import QueueRoundedIcon from "@material-ui/icons/QueueRounded";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(2),
  },
}));

export interface AppDrawerItemProps extends ListItemProps {
  href: string;
  icon: ReactElement;
  external?: boolean;
}

export const AppDrawerItem: FC<AppDrawerItemProps> = ({
  href,
  icon,
  external = false,
  children,
}) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      divider
      className={classes.listItem}
      href={href}
      target={external && "_blank"}
      rel={external && "noopener noreferrer"}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </ListItem>
  );
};
