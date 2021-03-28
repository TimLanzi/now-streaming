import React, { FormEvent, useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Flex, Box, Heading, Input, HStack, Link, Icon, Text, CircularProgress } from "@chakra-ui/react";
import { GoMarkGithub, GoPlay } from "react-icons/go";
import { useMultiSearch } from "../../graphql/search";


export default function Header() {
  const router = useRouter();

  /* GraphQL hooks */
  const [multiSearch, { loading, error, data }] = useMultiSearch();
  
  /* State hooks */
  const [search, setSearch] = useState(router.query.query as string || "");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setSearch(router.query.query as string || "");
  }, [router]);

  /* Effect hooks */
  useEffect(() => {
    if (!loading) {
      if (error) {
        setErrorMessage(error.message);
      } else if (data) {
        if (data.multiSearch.results.length === 0) {
          setErrorMessage("Your search returned no results");
          return;
        }

        const type = data.multiSearch.results[0].media_type;
        switch(data.multiSearch.results[0].media_type) {
          case "movie":
          case "tv": {
            router.push(`/search/${type}?query=${search}`);
            break;
          }

          default: {
            setErrorMessage("Your search returned no results");
            break;
          }
        }
      }
    }
  }, [loading, error, data]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    setErrorMessage("");
    multiSearch({ variables: {
      input: { query: search },
    }});
  }

  return (
    <Box bgColor="#333" color="white" as="header" w="100%" pos="sticky" top="0" zIndex="5">
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center" maxW="1200px" height="100%" m="auto" h={{ base: "auto",  lg: "5em"}}>
        <NextLink href="/">
          <Heading d="flex" as="h4" fontSize="lg" my={{ base: "5",  lg: "auto" }} fontWeight="medium" px="10" cursor="pointer">
            <Icon as={GoPlay} color="purple.500" w='35px' h='35px' mr="3" verticalAlign="middle" />
            <Text as="span" verticalAlign="middle" lineHeight="2em">
              Now Streaming
            </Text>
          </Heading>
        </NextLink>

        <Box d="flex" w={["auto", "600px"]} mx="70" pb={{ base: "2em", lg: 0}}>
          <Box d="flex" flexDir="row" flexGrow={1} pos="relative" w="100%">
            { loading &&
              <CircularProgress isIndeterminate pos="absolute" right="2" top="2" color="purple.500" size="30px" />
            }
            <Box w="100%" textAlign="center">
              <form style={{ width: "100%" }} onSubmit={onSubmit}>
                <Input
                  size="lg"
                  isInvalid={!!errorMessage}
                  errorBorderColor="red.300"
                  isDisabled={loading}
                  placeholder="Search for Movies or TV Shows"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </form>
              { !!errorMessage &&
                <Text color="red.300">{errorMessage}</Text>
              }
            </Box>
          </Box>

          <HStack ml="10" d="flex">
            {/* TODO: final github link */}
            <Link href="http://github.com">
              <Icon w='30px' h='30px' as={GoMarkGithub} />
            </Link>
          </HStack>
        </Box>
      </Flex>
    </Box>
  )
}