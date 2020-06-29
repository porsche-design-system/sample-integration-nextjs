import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles.css';

export default class StyledApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        {/* Add site-wide head tags here, but put page specific tags in the individual pages instead. */}
        <Head>
          {/** This doesn't break fonts or icons. */}
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" key="viewport" />
          <title>Sample Integration NextJ</title>

          {/**
           This breaks fonts, icons in IE11.
           There is a general issue with duplicated <head> contents like <meta charset> and <meta name=viewport> in all Browsers.
           Fix this issue first an recheck the IE11 issue.
           This seems to be related to this issue: https://github.com/vercel/next.js/issues/9794
           And will maybe fixed with: https://github.com/vercel/next.js/pull/13005 in the next release
           */}
           <link rel="icon" href="/favicon.ico" key="favicon" />

          {/** This breaks fonts, icons in IE11. */}
          {/* <link
            rel="preconnect"
            href="https://cdn.ui.porsche.com/"
            key="porscheui-cdn-preconnect"
          /> */}
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
