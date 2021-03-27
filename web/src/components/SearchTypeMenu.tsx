import { useRouter } from "next/router";
import { Stack, Badge } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

interface Props {
  movieResults?: number;
  tvResults?: number;
}

const SearchTypeMenu: React.FC<Props> = ({ movieResults, tvResults }) => {
  const router = useRouter();

  return (
    <Stack as="ul" d="flex" w="100%" pos={{ lg: "sticky" }} top={{ lg: "7.5em" }} borderWidth="1px" borderRadius="5px">
      <MenuItem href={`/search/movie?query=${router.query.query}`}>
        Movies
        { movieResults &&
          <Badge pos="absolute" right="5" colorScheme="purple" textAlign="center" h="20px" w="20px" borderRadius="500px" variant="solid">
            {movieResults}
          </Badge>
        }
      </MenuItem>
      
      <MenuItem href={`/search/tv?query=${router.query.query}`}>
        TV Shows
        { tvResults &&
          <Badge pos="absolute" right="5" colorScheme="purple" textAlign="center" h="20px" w="20px" borderRadius="500px" variant="solid">
            {tvResults}
          </Badge>
        }
      </MenuItem>
    </Stack>
  )
}

export default SearchTypeMenu;