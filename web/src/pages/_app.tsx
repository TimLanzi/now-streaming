import { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo/client";
import * as ga from "../lib/ga";
import '../styles/globals.scss'

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    purple: {
      50: '#f5e9ff',
      100: '#dac1f3',
      200: '#c098e7',
      300: '#a571dc',
      400: '#8c48d0',
      500: '#722fb7',
      600: '#59238f',
      700: '#3f1968',
      800: '#260f40',
      900: '#10031a',
    }
  }
}

function MyApp({ Component, pageProps }) {
  /* Google Analytics */
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    }

    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Now Streaming</title>
      </Head>
      <ApolloProvider client={client}>
        <ChakraProvider theme={customTheme}>
          <CSSReset />
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
