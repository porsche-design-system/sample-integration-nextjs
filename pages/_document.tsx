import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';
import React from 'react';
import {
  getFontFaceStylesheet,
  getInitialStyles,
  getIconLinks,
  getMetaTagsAndIconLinks,
  getComponentChunkLinks,
  getFontLinks,
} from '@porsche-design-system/components-react/partials';
import { partials } from '@porschehn/navigation/dist/porsche-navigation/partials'
import { includeOverlay, includeCookieOverlay, includeBanner } from '@porsche-design-system/browser-notification';

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
          {getFontFaceStylesheet({ format: 'jsx' })}
          {getComponentChunkLinks({ format: 'jsx' })}
          {getFontLinks({ format: 'jsx' })}
          {getIconLinks({ format: 'jsx' })}
          {getMetaTagsAndIconLinks({ appTitle: 'Sample Project NextJS', format: 'jsx' })}
          {getInitialStyles({
            format: 'jsx',
            skeletonTagNames: [
              'p-button',
              'p-button-pure',
              'p-checkbox-wrapper',
              'p-fieldset-wrapper',
              'p-link',
              'p-link-pure',
              'p-radio-button-wrapper',
              'p-select-wrapper',
              'p-textarea-wrapper',
              'p-text-field-wrapper',
            ],
          })}
          <div dangerouslySetInnerHTML={{ __html: partials() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* getLoaderScript partial makes no sense in this context and breaks the app in dev mode */}
          {/* {getLoaderScript({ format: 'jsx' })} */}
          <div dangerouslySetInnerHTML={{ __html: includeBanner() + includeOverlay() + includeCookieOverlay() }} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
