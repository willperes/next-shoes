import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ChangeThemeProvider, useChangeTheme } from '../hooks/useChangeTheme';
import { MenuProvider } from '../hooks/useMenu';

import GlobalStyles from '../styles/global';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const getDarkTheme = localStorage.getItem('@NextShoes: Theme');
    if (!getDarkTheme) {
      localStorage.setItem('@NextShoes: Theme', 'dark');
      setIsDarkTheme(true);
      return;
    }

    if (getDarkTheme === 'dark') {
      setIsDarkTheme(true);
      return;
    } else if (getDarkTheme === 'light') {
      setIsDarkTheme(false);
      return;
    }
  }, [])

  function switchTheme() {
    const themeValue = isDarkTheme;

    if (themeValue === true) {
      localStorage.setItem('@NextShoes: Theme', 'light');
    } else {
      localStorage.setItem('@NextShoes: Theme', 'dark');
    }

    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <ChangeThemeProvider switchTheme={switchTheme} >
      <MenuProvider>
        <ThemeProvider theme={isDarkTheme ? dark : light}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </MenuProvider>
    </ChangeThemeProvider>
  );
}

export default MyApp
