import { Flex, Box, Text } from "@chakra-ui/react"
import Link from "next/link";
import { useRouter } from "next/router";

const PrivacyLink: React.FC = () => {
  const router = useRouter();
  return (
    <Flex
    pos={{
      base: router.pathname === "/"
        ? "fixed"
        : "relative",
      "2xl": "fixed",
    }}
    bottom="0"
    left="0">
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