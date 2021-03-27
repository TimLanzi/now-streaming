import Link from "next/link";
import { Box } from "@chakra-ui/react";

interface Props {
  href?: string;
}

const MenuItem: React.FC<Props> = ({ children, href }) => {
  const ITEM = (
    <Box as="li" d="flex" p="1em" fontWeight="medium" cursor="pointer" _hover={{ backgroundColor: "#fcfcfc"}} _notLast={{ borderBottom: "1px solid #E2E8F0"}} _notFirst={{ marginTop: 0 }}>
      {children}
    </Box>
  )

  return href
    ? <Link href={href}>
        {ITEM}
      </Link>

    : ITEM;
}

export default MenuItem;