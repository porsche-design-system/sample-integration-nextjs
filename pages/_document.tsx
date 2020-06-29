import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
    <Html>
      <Head>
        {/**
         There is a general issue with duplicated <head> contents like <meta name=viewport> in all Browsers.
         This seems to be related to this issue: https://github.com/vercel/next.js/discussions/13408
         And will maybe fixed with: https://github.com/vercel/next.js/pull/13005 in the next release
         */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>Sample Integration NextJS</title>

        <link rel="icon" href="/favicon.ico" key="favicon" />
        <link rel="preconnect" href="https://cdn.ui.porsche.com/" key="porscheui-cdn-preconnect"/>
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
    )
  }
}

export default MyDocument
