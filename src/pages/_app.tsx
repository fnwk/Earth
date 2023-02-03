import type { AppProps } from "next/app";
import { Cormorant } from "@next/font/google";

import theme from "@/styles/theme";
import GlobalStyle from "@/styles/globalStyle";
import styled, { ThemeProvider } from "styled-components";

const cormorant = Cormorant({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme.info.small}>
      <GlobalStyle />
      <Container className={cormorant.className}>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;
