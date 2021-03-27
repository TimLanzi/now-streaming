import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import StreamingServiceLogo from "./StreamingServiceLogo";

interface Props {
  id: string;
  type: string;
  img: string;
  title: string;
  watchOn?: any[];
}

const ResultCard: React.FC<Props> = ({ id, type, title, img, watchOn }) => {
  return (
    <Link href={`https://www.themoviedb.org/${type}/${id}`} target="_blank" rel="noreferrer noopener">
      <Box d="flex" flexDir="row" flexWrap="wrap"  borderRadius="lg" borderWidth="1px" mb="5" mr={["0", "0", "0", "5"]}>
        <Flex maxW="50%">
          <Image src={img} alt={`${title} poster`} />
        </Flex>
        <Box p="6" w="50%">
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
    </Link>
  );
}

export default ResultCard