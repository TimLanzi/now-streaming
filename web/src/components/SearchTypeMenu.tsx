import Link from "next/link";
import { useRouter } from "next/router";
import { Stack, Box } from "@chakra-ui/react";

export default function SearchTypeMenu() {
  const router = useRouter();

  return (
    <Stack as="ul" borderWidth="1px" d="flex" w="100%" borderRadius="5px">
      <Link href={`/search/movie?query=${router.query.query}`}>
        <Box as="li" d="flex" p="1em" fontWeight="medium" cursor="pointer" _hover={{ backgroundColor: "#fcfcfc"}}>
          Movies
        </Box>
      </Link>
      <hr style={{ margin: 0 }} />
      <Link href={`/search/tv?query=${router.query.query}`}>
        <Box as="li" d="flex" p="1em" fontWeight="medium" cursor="pointer" _hover={{ backgroundColor: "#fcfcfc"}}>
          TV Shows
        </Box>
      </Link>
    </Stack>
  )
}