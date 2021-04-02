import { FormEvent, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Heading, Text, Box, Input, Progress } from "@chakra-ui/react"
import Layout from '../components/Layout';
import { useMultiSearch } from "../graphql/search";
import styles from '../styles/Home.module.scss'

export default function HomePage() {
  const router = useRouter();

  /* GraphQL hooks */
  const [multiSearch, { loading, error, data }] = useMultiSearch();

  /* State hooks */
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    setErrorMessage("");
    multiSearch({ variables: {
      input: { query: search },
    }});
  }

  return (
    <Layout>
      <Head>
        <title>Now Streaming</title>
      </Head>
      <Box
        minH={{ base: "40vh", md: "70vh"}}
        p="0 0.5rem"
        d="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          flex={1}
          mx={{ base: "5", lg: "0" }}
          d="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          className={`${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}
        >
          <Heading as="h1" size="2xl" mb="6" textAlign="center">
            Welcome to <Text as="span" color="purple.500">Now Streaming!</Text>
          </Heading>
          
          { loading
            ? <Progress w="100%" size="xs" isIndeterminate colorScheme="purple" />
            : <form style={{ width: "100%" }} onSubmit={onSubmit}>
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
          }
          { !!errorMessage &&
            <Text color="red.300">{errorMessage}</Text>
          }
        </Box>
      </Box>
    </Layout>
  )
}