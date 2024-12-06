import { Box, Grid } from "@material-ui/core";
import {
  Display,
  Flex,
  GO_STRATEGY_URL,
  Subtitle,
  Title,
} from "@gofinance/go-ui";
import { useMobile } from "@gofinance/go-ui";

export const HomeStrategy = () => {
  const mobile = useMobile();

  return (
    <Display center column>
      <Grid container alignItems="center" justify="center" spacing={4}>
        <Grid item xs={12} md={4}>
          <Flex justify={mobile ? "center" : "flex-start"} align="center">
            <img
              src={GO_STRATEGY_URL}
              alt="go-strategy"
              width={300}
              height="auto"
            />
          </Flex>
        </Grid>
        <Grid item xs={12} md={4}>
          <Title align={mobile ? "center" : "left"} gutterBottom>
            <b>
              DeFi Done{" "}
              <Box component="span" color="secondary.main">
                Better
              </Box>
            </b>
          </Title>
          <Subtitle align={mobile ? "center" : "left"} paragraph>
            Volume across DeFi markets is not consistent, it moves according to
            market conditions and underlying funding. Risk is not consistent
            either, as protocols can accomplish similar results with different
            processes. Gain exposure to a managed index of DeFi strategies,
            designed to increase volume exposure and reduce Smart Contract risk.
          </Subtitle>
        </Grid>
      </Grid>
    </Display>
  );
};
