import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { chakraTheme } from "@/config/chakra/CustomTheme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

App.getInitialProps = async () => ({ pageProps: {} });

export default App;
