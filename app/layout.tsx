import { PorscheDesignSystemProvider, PToast } from '@porsche-design-system/components-react/ssr';
import {
  getBrowserSupportFallbackScript,
  getComponentChunkLinks,
  getCookiesFallbackScript,
  getDSRPonyfill,
  getFontFaceStylesheet,
  getFontLinks,
  getIconLinks,
  getInitialStyles,
  getMetaTagsAndIconLinks,
} from '@porsche-design-system/components-react/partials';
import React from 'react';
import { Head } from 'next/document';
import { Header } from '../components';
import '../styles.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*<Head>*/}
      {/*  <title>NextJS sample project</title>*/}
      {/*  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />*/}
      {/*  <meta charSet="utf-8" />*/}
      {/*  <link rel="icon" href="/favicon.ico" key="favicon" />*/}
      {/*  /!* **necessary for SSR support**, injects stylesheet which defines visibility of pre-hydrated PDS components *!/*/}
      {/*  {getInitialStyles({ format: 'jsx' })}*/}
      {/*  /!* injects stylesheet which defines Porsche Next CSS font-face definition (=> minimize FOUT) *!/*/}
      {/*  {getFontFaceStylesheet({ format: 'jsx' })}*/}
      {/*  /!* preloads Porsche Next font (=> minimize FOUT) *!/*/}
      {/*  {getFontLinks({ format: 'jsx' })}*/}
      {/*  /!* preloads PDS component core chunk from CDN for PDS component hydration (=> improve loading performance) *!/*/}
      {/*  {getComponentChunkLinks({ components: ['tabs-bar', 'scroller', 'icon'], format: 'jsx' })}*/}
      {/*  /!* preloads Porsche icons (=> minimize FOUC) *!/*/}
      {/*  {getIconLinks({ format: 'jsx' })}*/}
      {/*  /!* injects favicon, apple touch icons, android touch icons, etc. *!/*/}
      {/*  {getMetaTagsAndIconLinks({ appTitle: 'Sample Project NextJS', format: 'jsx' })}*/}
      {/*</Head>*/}
      <body>
        <PorscheDesignSystemProvider>
          <Header />
          <div className="pageLayout">{children}</div>
          <PToast />
        </PorscheDesignSystemProvider>
        {/* getLoaderScript partial makes no sense in this context and breaks the app in dev mode */}
        {/* {getLoaderScript({ format: 'jsx' })} */}
        {/* **necessary for SSR support**, enables declarative shadow dom support for Safari and Firefox */}
        {getDSRPonyfill({ format: 'jsx' })}
        {/* shows a cookie fallback overlay and blocks the page, in case cookies are disabled */}
        {getCookiesFallbackScript({ format: 'jsx' })}
        {/* shows a browser fallback overlay and blocks the page, in case browser is not supported (e.g. IE11) */}
        {getBrowserSupportFallbackScript({ format: 'jsx' })}
      </body>
    </html>
  );
}
