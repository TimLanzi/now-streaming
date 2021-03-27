import { Box } from "@chakra-ui/react";

const MenuItem: React.FC = ({ children }) => {
  return (
    <Box as="li" d="flex" p="1em" fontWeight="medium" cursor="pointer" _hover={{ backgroundColor: "#fcfcfc"}} _notLast={{ borderBottom: "1px solid #E2E8F0"}} _notFirst={{ marginTop: 0 }}>
      {children}
    </Box>
  )
}

export default MenuItem;