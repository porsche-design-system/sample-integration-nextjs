import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { getFontFaceCSS, getPorscheDesignSystemCoreStyles } from '@porsche-design-system/partials';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" key="favicon" />
          <link rel="preconnect" href="https://cdn.ui.porsche.com/" key="porscheui-cdn-preconnect" />
          <link rel="stylesheet" href={getFontFaceCSS({ withoutTags: true })} />
          <style dangerouslySetInnerHTML={{ __html: getPorscheDesignSystemCoreStyles({ withoutTags: true }) }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
