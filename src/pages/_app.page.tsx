import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { NextPage } from 'next';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';

import { lightTheme } from '@/theme';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element) => React.ReactNode;
};

interface IProps extends AppProps {
  Component: NextPageWithLayout;
}

/**
 * App
 * @param {IProps} props
 * @return {JSX.Element}
 */
const App = (props: IProps): JSX.Element => {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page: JSX.Element) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
};

export default App;
