import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';
import React from 'react';
import {
  getFontFaceStylesheet,
  getInitialStyles,
  getIconLinks,
  getMetaTagsAndIconLinks,
  getComponentChunkLinks,
  getFontLinks,
  getBrowserSupportFallbackScript,
  getCookiesFallbackScript,
  getDSRPonyfill
} from '@porsche-design-system/components-react/partials';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" key="favicon" />
          {getInitialStyles({ format: 'jsx'})} // **necessary for SSR support**, inject stylesheet which defines visibility of pre-hydrated PDS components
          {getFontFaceStylesheet({ format: 'jsx' })} // inject stylesheet which defines Porsche Next CSS font-face definition
          {getFontLinks({ format: 'jsx' })} // preloads Porsche Next font
          {getComponentChunkLinks({ format: 'jsx' })} // preloads PDS component core chunk from CDN for PDS component hydration
          {getIconLinks({ format: 'jsx' })} // preloads Porsche icons
          {getMetaTagsAndIconLinks({ appTitle: 'Sample Project NextJS', format: 'jsx' })} // inject favicon, apple touch icons, android touch icons, etc.
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* getLoaderScript partial makes no sense in this context and breaks the app in dev mode */}
          {/* {getLoaderScript({ format: 'jsx' })} */}
          {getDSRPonyfill({ format: 'jsx' })} // **necessary for SSR support**, enables declarative shadow dom support for Safari and Firefox
          {getCookiesFallbackScript({ format: 'jsx' })} // shows a cookie fallback overlay and blocks the page, in case cookies are disabled
          {getBrowserSupportFallbackScript({ format: 'jsx' })} // shows a browser fallback overlay and blocks the page, in case browser is not supported (e.g. IE11)
        </body>
      </Html>
    );
  }
}

export default MyDocument;
