import { Box, Button, Grid } from "@material-ui/core";
import {
  DEFI_DOLLAR_URL,
  Display,
  Flex,
  Heading,
  PITCH_DECK_URL,
  Subtitle,
} from "@gofinance/go-ui";
import { useMobile } from "@gofinance/go-ui";
import { HomeFeatureGrid } from "./components/HomeFeatureGrid";

export const HomeAbout = () => {
  const mobile = useMobile();

  return (
    <Display center>
      <Box mb={4}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4}>
            <Heading
              variant="h3"
              gutterBottom
              align={mobile ? "center" : "left"}
            >
              <b>
                DeFi Made{" "}
                <Box component="span" color="secondary.main">
                  Easier
                </Box>
              </b>
            </Heading>
            <Subtitle align={mobile ? "center" : "left"} paragraph>
              Go! Finance aggregates popular DeFi investment strategies and
              automatically compounds your earnings.
            </Subtitle>
            <Flex justify={mobile ? "center" : "flex-start"}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                target="_blank"
                href={PITCH_DECK_URL}
              >
                Learn More
              </Button>
            </Flex>
          </Grid>
          <Grid item xs={12} md={4}>
            <Flex justify={mobile ? "center" : "flex-end"} align="center">
              <img
                src={DEFI_DOLLAR_URL}
                alt="gofinance-brand"
                width={300}
                height="auto"
              />
            </Flex>
          </Grid>
        </Grid>
      </Box>
      <HomeFeatureGrid />
    </Display>
  );
};
