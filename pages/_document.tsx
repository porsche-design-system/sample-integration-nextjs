import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { getFontFaceStylesheet, getInitialStyles } from '@porsche-design-system/components-js/partials';
import { includeOverlay, includeCookieOverlay, includeBanner } from '@porsche-design-system/browser-notification';


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" key="favicon" />
          <link rel="preconnect" href="https://cdn.ui.porsche.com/" key="porscheui-cdn-preconnect" />
          <link rel="stylesheet" href={getFontFaceStylesheet({ withoutTags: true })} />
          <style dangerouslySetInnerHTML={{ __html: getInitialStyles({ withoutTags: true }) }} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div dangerouslySetInnerHTML={{ __html: includeBanner() }} />
          <div dangerouslySetInnerHTML={{ __html: includeCookieOverlay() }} />
          <div dangerouslySetInnerHTML={{ __html: includeOverlay() }} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
