import { Slide, Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link"
import cookies from "js-cookie";
import { useState } from "react";

const CookieNotice = () => {
  const [open, setOpen] = useState(!cookies.get("acpt"));

  const handleAccept = () => {
    cookies.set("acpt", Date.now().toString());
    setOpen(false);
  }

  return (
    <Slide direction="bottom" in={open} style={{ zIndex: 10 }}>
      <Box py="40px" px="5em" color="white" bgColor="purple.500" mt="4" rounded="md" shadow="md">
        <Text mb="5">
          This website uses Google Analytics and stores cookies on your computer. To find out more about Google Analytics and the cookies we use, see our <Link href="/privacy"><Text as="span" color="blue.500" _hover={{ cursor: "pointer", textDecoration: "underline" }}>Privacy Policy</Text></Link>.
        </Text>
        <Button type="button" onClick={handleAccept} bgColor="blackAlpha.500" _hover={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
          Accept
        </Button>
      </Box>
    </Slide>
  )
}

export default CookieNotice;