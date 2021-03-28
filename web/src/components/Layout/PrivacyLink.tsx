import { Flex, Box, Text } from "@chakra-ui/react"
import Link from "next/link";

const PrivacyLink = () => {
  return (
    <Flex pos="absolute" bottom="0" right="0">
      <Box p="5">
        <Link href="privacy">
          <Text as="span" _hover={{ color: "blue.500", cursor: "pointer", textDecoration: "underline"  }}>
            Privacy Policy
          </Text>
        </Link>
      </Box>
    </Flex>
  )
}

export default PrivacyLink