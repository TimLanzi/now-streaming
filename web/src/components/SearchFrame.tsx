import { Box, Flex, Grid } from "@chakra-ui/react"
import SearchTypeMenu from "./SearchTypeMenu"
import Attributions from "./Attributions";

interface Props {
  movieResults?: number;
  tvResults?: number;
}

const SearchFrame: React.FC<Props> = ({ children, movieResults, tvResults }) => {
  return (
    <Grid gap={4} templateColumns={{ base: "1fr", lg: "1fr 3fr"}} maxW={{ base: "100%", md: "1500px" }} mx="auto" pt="10" flexDir={["column", "column", "row"]}>
      <Box mx={{ base: "5", lg: "0" }} pl={["0", "0", "0", '5']}>
        <Box pos={{ lg: "sticky" }} top={{ lg: "7.5em" }}>
          <SearchTypeMenu movieResults={movieResults} tvResults={tvResults} />

          <Attributions />
        </Box>
      </Box>
      <Flex mx={{ base: "5", lg: "0" }} flexWrap="wrap" alignItems="center" justifyContent="center" w={["auto", "auto", "auto", "100%"]} pb="5">
        {children}
      </Flex>
    </Grid>
  );
}

export default SearchFrame