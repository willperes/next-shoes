import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MenuProvider } from '../hooks/useMenu';

import GlobalStyles from '../styles/global';
import dark from '../styles/themes/dark';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuProvider>
      <ThemeProvider theme={dark}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </MenuProvider>
  );
}

export default MyApp
