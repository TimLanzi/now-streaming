import Link from "next/link";
import { useRouter } from "next/router";
import { Stack, Box, Badge } from "@chakra-ui/react";

interface Props {
  movieResults?: number;
  tvResults?: number;
}

const SearchTypeMenu: React.FC<Props> = ({ movieResults, tvResults }) => {
  const router = useRouter();

  return (
    <Stack as="ul" d="flex" w="100%" pos={{ lg: "sticky" }} top={{ lg: "7.5em" }} borderWidth="1px" borderRadius="5px">
      <Link href={`/search/movie?query=${router.query.query}`}>
        <Box as="li" d="flex" p="1em" fontWeight="medium" cursor="pointer" _hover={{ backgroundColor: "#fcfcfc"}}>
          Movies
          { movieResults &&
            <Badge pos="absolute" right="5" colorScheme="purple" textAlign="center" h="20px" w="20px" borderRadius="500px" variant="solid">
              {movieResults}
            </Badge>
          }
        </Box>
      </Link>
      <hr style={{ margin: 0 }} />
      <Link href={`/search/tv?query=${router.query.query}`}>
        <Box as="li" d="flex" p="1em" fontWeight="medium" cursor="pointer" _hover={{ backgroundColor: "#fcfcfc"}}>
          TV Shows
          { tvResults &&
            <Badge pos="absolute" right="5" colorScheme="purple" textAlign="center" h="20px" w="20px" borderRadius="500px" variant="solid">
              {tvResults}
            </Badge>
          }
        </Box>
      </Link>
    </Stack>
  )
}

export default SearchTypeMenu;