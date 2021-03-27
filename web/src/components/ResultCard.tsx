import { Box, Flex, Image, Text } from "@chakra-ui/react";
import StreamingServiceLogo from "./StreamingServiceLogo";

interface Props {
  id: string;
  img: string;
  title: string;
  watchOn?: any[];
}

const ResultCard: React.FC<Props> = ({ id, title, img, watchOn }) => {
  return (
    <Box d="flex" flexDir="row" flexWrap="wrap" w={{ base: "100%", lg: "100%", xl: "100%", "2xl": "502px" }} borderRadius="lg" borderWidth="1px" overflow="hidden" mb="5" mr={["0", "0", "0", "5"]}>
      <Flex justifyContent="center">
        <Image w="100%" src={img} alt={`${title} poster`} />
      </Flex>
      <Box p="6" maxW="200px">
        <Text fontSize="lg" fontWeight="medium" mb="3">
          {title}
        </Text>
        { watchOn
          ? <>
              <Text as="span">
                Streaming On:
              </Text>
              <Flex mt="2">
                { [...watchOn]?.sort((a, b) => a.display_priority > b.display_priority ? 1 : -1)
                  .slice(0, 3)
                  .map(item => (
                  <StreamingServiceLogo
                    size="40px"
                    img={`https://www.themoviedb.org/t/p/original${item.logo_path}`}
                    link={"https://example.com"}
                  />
                ))}
              </Flex>
            </>
          : "Unavailable on streaming services"
        }
      </Box>
    </Box>
  );
}

export default ResultCard