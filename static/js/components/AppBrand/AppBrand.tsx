import { GO_BRAND_URL, useMobile } from "@gofinance/go-ui";

export const AppBrand = () => {
  const mobile = useMobile();

  return (
    <img
      src={GO_BRAND_URL}
      alt="go-finance-brand"
      width={mobile ? "250px" : "500px"}
      height="auto"
    />
  );
};
