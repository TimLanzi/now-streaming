import { Stack, Box } from "@chakra-ui/react";

export default function SearchTypeMenu() {
  return (
    <Stack as="ul" borderWidth="1px" p="1em" d="flex" w="100%" borderRadius="5px">
      <Box as="li" d="flex" fontWeight="medium">
        Movies
      </Box>
      <hr/>
      <Box as="li" d="flex" fontWeight="medium">
        TV Shows
      </Box>
    </Stack>
  )
}