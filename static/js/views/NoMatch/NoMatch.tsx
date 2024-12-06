import { Button } from "@material-ui/core";
import { Flex, Heading } from "@gofinance/go-ui";
import { AppBrand } from "components/AppBrand";
import { FaHome } from "react-icons/fa";
import { useHistory } from "react-router";

export const NoMatch = () => {
  const history = useHistory();

  return (
    <Flex center column grow>
      <Flex my={2}>
        <AppBrand />
      </Flex>

      <Heading align="center" gutterBottom>
        Page Not Found
      </Heading>

      <Button
        variant="contained"
        startIcon={<FaHome />}
        onClick={() => history.push("/")}
      >
        Return Home
      </Button>
    </Flex>
  );
};
