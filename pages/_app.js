import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { ChakraProvider, ColorModeScript, useColorMode } from "@chakra-ui/react";
import Layout from '../components/Layout.jsx';
import { Global } from "@emotion/react";
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  // Global styles based on color mode
  const GlobalStyles = () => {
    const { colorMode } = useColorMode();  // Access color mode using Chakra's hook

    return (
      <Global
        styles={{
          body: {
            backgroundColor:
              colorMode === 'dark' ? theme.colors.gray[800] : theme.colors.gray[50],
            color: colorMode === 'dark' ? 'silver' : 'black',
          },
        }}
      />
    );
  };

  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      {/* ColorModeScript ensures the correct theme is applied on initial load */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        {/* Apply global styles for light/dark mode */}
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
