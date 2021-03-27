import { Box, Flex, Grid } from "@chakra-ui/react"
import SearchTypeMenu from "./SearchTypeMenu"

interface Props {
  movieResults?: number;
  tvResults?: number;
}

const SearchFrame: React.FC<Props> = ({ children, movieResults, tvResults }) => {
  return (
    <Grid gap={4} templateColumns={{ base: "1fr", lg: "400px 3fr"}} maxW={{ base: "100%", md: "1500px" }} mx="auto" pt="10" flexDir={["column", "column", "row"]}>
      <Box mx={{ base: "5", lg: "0" }} pl={["0", "0", "0", '5']}>
        <SearchTypeMenu movieResults={movieResults} tvResults={tvResults} />
      </Box>
      <Flex mx={{ base: "5", lg: "0" }} flexWrap="wrap" alignItems="center" justifyContent="center" w={["auto", "auto", "auto", "100%"]} pb="5">
        {children}
      </Flex>
    </Grid>
  );
}

export default SearchFrame