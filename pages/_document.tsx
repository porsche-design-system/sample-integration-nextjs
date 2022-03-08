import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import {
  getFontFaceStylesheet,
  getInitialStyles,
  getLoaderScript,
  getIconLinks,
  getMetaTagsAndIconLinks,
  getComponentChunkLinks,
  getFontLinks,
} from '@porsche-design-system/components-react/partials';
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
          {getFontFaceStylesheet({ format: 'jsx' })}
          {getInitialStyles({ format: 'jsx' })}
          {getComponentChunkLinks({ format: 'jsx' })}
          {getFontLinks({ format: 'jsx' })}
          {getIconLinks({ format: 'jsx' })}
          {getMetaTagsAndIconLinks({ appTitle: 'Sample Project NextJS', format: 'jsx' })}
        </Head>
        <body>
          <Main />
          <NextScript />
          {getLoaderScript({ format: 'jsx' })}
          <div dangerouslySetInnerHTML={{ __html: includeBanner() }} />
          <div dangerouslySetInnerHTML={{ __html: includeCookieOverlay() }} />
          <div dangerouslySetInnerHTML={{ __html: includeOverlay() }} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
