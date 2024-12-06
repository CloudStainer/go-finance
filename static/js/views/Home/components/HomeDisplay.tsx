import { Box, Button, Container, Grid } from "@material-ui/core";
import {
  Display,
  Flex,
  PITCH_DECK_URL,
  Subtitle,
  Title,
  TwitterButton,
  TelegramButton,
  MediumButton,
  APP_URL,
} from "@gofinance/go-ui";
import { AppBrand } from "components/AppBrand";
import { isLocalhost } from "utils/misc";

export const HomeDisplay = () => {
  const dev = isLocalhost();

  return (
    <Display center>
      <Container maxWidth="md">
        <Flex center my={2}>
          <AppBrand />
        </Flex>
        <Title align="center" gutterBottom>
          <b>
            Do{" "}
            <Box component="span" color="secondary.main">
              More
            </Box>{" "}
            with your DeFi Dollar
          </b>
        </Title>
        <Subtitle align="center" paragraph>
          GO! Finance is an optimized yield-generation protocol, focused on
          reducing risk and increasing volume exposure. Start earning{" "}
          <Box component="span" color="secondary.main">
            <b>industry-leading interest rates</b>
          </Box>{" "}
          on stablecoins in just a few clicks.
        </Subtitle>
        <Box mb={2}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="large"
                target="_blank"
                href={APP_URL}
              >
                Launch App
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={2} justify="center">
          <Grid item>
            <TelegramButton />
          </Grid>
          <Grid item>
            <TwitterButton />
          </Grid>
          <Grid item>
            <MediumButton />
          </Grid>
        </Grid>
      </Container>
    </Display>
  );
};
