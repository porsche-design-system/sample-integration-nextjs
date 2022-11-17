import App from 'next/app';
import React from 'react';
import '../styles.scss';
import Head from 'next/head';
import { PorscheDesignSystemProvider, PToast } from '@porsche-design-system/components-react/ssr';

export default class StyledApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>NextJS sample project</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        </Head>
        <PorscheDesignSystemProvider>
          <Component {...pageProps} />
          <PToast />
        </PorscheDesignSystemProvider>
      </>
    );
  }
}
