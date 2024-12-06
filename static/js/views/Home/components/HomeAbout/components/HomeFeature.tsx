import { Box } from "@material-ui/core";
import { Flex, Subheading, Text } from "@gofinance/go-ui";

export interface HomeFeatureProps {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
}

export const HomeFeature: React.FC<HomeFeatureProps> = ({
  img,
  alt,
  title,
  subtitle,
}) => {
  return (
    <Flex center column>
      <Box mb={2}>
        <img src={img} alt={alt} width="100px" height="auto" />
      </Box>
      <Subheading gutterBottom>
        <b>{title}</b>
      </Subheading>
      <Text align="center">{subtitle}</Text>
    </Flex>
  );
};
