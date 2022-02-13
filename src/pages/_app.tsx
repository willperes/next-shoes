import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { CartProvider } from '../hooks/useCart';
import { ChangeThemeProvider } from '../hooks/useChangeTheme';
import { MenuProvider } from '../hooks/useMenu';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer/Footer';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NProgress from 'nprogress';
import '../styles/nprogress.css';

import GlobalStyles from '../styles/global';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import Router from 'next/router';

Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
})

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const getDarkTheme = localStorage.getItem('@NextShoes: Theme');
    if (!getDarkTheme) {
      localStorage.setItem('@NextShoes: Theme', 'light');
      setIsDarkTheme(false);
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
      <CartProvider>
        <MenuProvider>
          <ThemeProvider theme={isDarkTheme ? dark : light}>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <ToastContainer autoClose={2500} />
            <GlobalStyles />
          </ThemeProvider>
        </MenuProvider>
      </CartProvider>
    </ChangeThemeProvider>
  );
}

export default MyApp
