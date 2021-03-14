import { Box, Container, Flex } from "@chakra-ui/react"
import SearchTypeMenu from "./SearchTypeMenu"

const SearchFrame: React.FC = ({ children }) => {
  return (
    <Flex maxW="1200px" mx="auto" pt="10">
      <Box w="300px">
        <SearchTypeMenu />
      </Box>
      <Flex maxW="900px" ml="5" flexWrap="wrap" alignItems="center">
        {children}
      </Flex>
    </Flex>
  )
}

export default SearchFrame