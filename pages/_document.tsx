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
  getDSRPonyfill,
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
          {/* **necessary for SSR support**, injects stylesheet which defines visibility of pre-hydrated PDS components */}
          {getInitialStyles({ format: 'jsx' })}
          {/* injects stylesheet which defines Porsche Next CSS font-face definition (=> minimize FOUT) */}
          {getFontFaceStylesheet({ format: 'jsx' })}
          {/* preloads Porsche Next font (=> minimize FOUT) */}
          {getFontLinks({ format: 'jsx' })}
          {/* preloads PDS component core chunk from CDN for PDS component hydration (=> improve loading performance) */}
          {getComponentChunkLinks({ components: ['tabs-bar', 'scroller', 'icon'], format: 'jsx' })}
          {/* preloads Porsche icons (=> minimize FOUC) */}
          {getIconLinks({ format: 'jsx' })}
          {/* injects favicon, apple touch icons, android touch icons, etc. */}
          {getMetaTagsAndIconLinks({ appTitle: 'Sample Project NextJS', format: 'jsx' })}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* getLoaderScript partial makes no sense in this context and breaks the app in dev mode */}
          {/* {getLoaderScript({ format: 'jsx' })} */}
          {/* **necessary for SSR support**, enables declarative shadow dom support for Safari and Firefox */}
          {getDSRPonyfill({ format: 'jsx' })}
          {/* shows a cookie fallback overlay and blocks the page, in case cookies are disabled */}
          {getCookiesFallbackScript({ format: 'jsx' })}
          {/* shows a browser fallback overlay and blocks the page, in case browser is not supported (e.g. IE11) */}
          {getBrowserSupportFallbackScript({ format: 'jsx' })}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
