import { Center, Flex, Image, Link } from "@chakra-ui/react";

const Attributions = () => {
  return (
    <Flex mt="5">
      <Center justifyContent="space-evenly">
        <Link w="20%" href="https://www.themoviedb.org/" target="_blank" rel="noreferrer noopener">
          <Image
            src="/tmdb.svg"
            alt="Powered by TMDB"
            title="Powered by TMDB"
          />
        </Link>
        
        <Link w="30%" href="https://www.justwatch.com/" target="_blank" rel="noreferrer noopener">
          <Image
            src="/justwatch.svg"
            alt="Powered by JustWatch"
            title="Powered by JustWatch"
          />
        </Link>
      </Center>
    </Flex>
  )
}

export default Attributions;