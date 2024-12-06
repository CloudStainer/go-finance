import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import {
  Flex,
  useMobile,
  TELEGRAM_URL,
  TWITTER_URL,
  GO_TITLE_COLOR_URL,
} from "@gofinance/go-ui";
import { FaEnvelope, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { AppBrand } from "components/AppBrand";
// import version from "../../../package.json";

export const Contact = () => {
  const mobile = useMobile();

  return (
    <Flex center grow>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          <b>Contact Us</b>
        </Typography>
        <Flex center>
          <List>
            <ListItem>
              <ListItemIcon>
                <FaEnvelope fontSize={32} />
              </ListItemIcon>
              <ListItemText>
                <a href="#">hello@go.finance</a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaTwitter fontSize={32} />
              </ListItemIcon>
              <ListItemText>
                <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
                  @GoFinanceDefi
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaTelegramPlane fontSize={32} />
              </ListItemIcon>
              <ListItemText>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @GoFinanceDefi
                </a>
              </ListItemText>
            </ListItem>
          </List>
        </Flex>
        <Flex center my={4}>
          <img
            src={GO_TITLE_COLOR_URL}
            alt="go-finance-title"
            width={mobile ? "250px" : "500px"}
            height="auto"
          />
        </Flex>
        {/* <Typography align="center" variant="body2">
        Site Version: v{version}
      </Typography> */}
      </Container>
    </Flex>
  );
};
