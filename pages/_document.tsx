import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from "react";
import { CDN_BASE_URL, JS_MANIFEST } from '@porsche-design-system/browser-notification-banner';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8"/>
        <link rel="icon" href="/favicon.ico" key="favicon" />
        <link rel="preconnect" href="https://cdn.ui.porsche.com/" key="porscheui-cdn-preconnect"/>
        <script defer src={`${CDN_BASE_URL}/${JS_MANIFEST.init}`} key="browser-notification-banner"/>
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
