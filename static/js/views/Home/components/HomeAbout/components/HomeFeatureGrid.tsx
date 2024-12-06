import { Grid } from "@material-ui/core";
import { HomeFeature } from "./HomeFeature";
import { NON_CUSTODIAL_URL, SIMPLE_URL, TRUSTLESS_URL } from "@gofinance/go-ui";

export const HomeFeatureGrid = () => {
  return (
    <Grid container alignItems="center" justify="center" spacing={4}>
      <Grid item xs={12} md={3}>
        <HomeFeature
          img={TRUSTLESS_URL}
          alt="intelligent"
          title="Intelligent Auto-Compounding"
          subtitle="Auto-compound earnings to maximize underlying returns"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <HomeFeature
          img={SIMPLE_URL}
          alt="optimized"
          title="Gas Optimization"
          subtitle="Save on transaction fees by using optimized Smart Contracts"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <HomeFeature
          img={NON_CUSTODIAL_URL}
          alt="seamless"
          title="Seamless Fund Management"
          subtitle="Easily gain managed exposure to the most well-known DeFi protocols"
        />
      </Grid>
    </Grid>
  );
};
