
import { FormEvent, useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Flex, Box, Heading, Input, HStack, Link, Icon, Text } from "@chakra-ui/react";
import { GoMarkGithub, GoPlay } from "react-icons/go";


export default function Header() {
  const router = useRouter();
  
  const [search, setSearch] = useState(router.query.query as string || "");

  useEffect(() => {
    setSearch(router.query.query as string || "");
  }, [router]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    router.push(`/search/movie?query=${search}`)
  }

  return (
    <Box bgColor="blackAlpha.800" color="white" as="header" w="100%">
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center" maxW="1200px" height="100%" m="auto" h={{ base: "auto",  lg: "5em"}}>
        <NextLink href="/">
          <Heading d="flex" as="h4" fontSize="lg" my={{ base: "5",  lg: "auto" }} fontWeight="medium" px="10" cursor="pointer">
            {/* TODO logo */}
            <Icon as={GoPlay} color="purple.500" w='35px' h='35px' mr="3" verticalAlign="middle" />
            <Text as="span" verticalAlign="middle" lineHeight="2em">
              Now Streaming
            </Text>
          </Heading>
        </NextLink>

        <Box d="flex" w={["auto", "600px"]} mx="70" pb={{ base: "2em", lg: 0}}>
          <form style={{ width: "100%" }} onSubmit={onSubmit}>
            <Input
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </form>

          <HStack ml="10" d="flex">
            <Link href="http://github.com">
              <Icon w='30px' h='30px' as={GoMarkGithub} />
            </Link>
          </HStack>
        </Box>
      </Flex>
    </Box>
  )
}