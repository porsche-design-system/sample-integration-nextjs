import {PorscheDesignSystemProvider, PToast} from '@porsche-design-system/components-react/ssr';
import {
  getBrowserSupportFallbackScript, getComponentChunkLinks,
  getCookiesFallbackScript,
  getDSRPonyfill, getFontLinks, getIconLinks, getMetaTagsAndIconLinks,
} from '@porsche-design-system/components-react/partials';
import React from 'react';
import {Header, Partials} from '../components';
import '../styles.scss';
import {Metadata} from "next";

export const metadata: Metadata = {
  /* injects favicon, apple touch icons, android touch icons, etc. */
  // ...getMetaTagsAndIconLinks({ format: "js" });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* preloads Porsche Next font (=> minimize FOUT) */
  // getFontLinks({ format: 'js' }).forEach(({ href, ...opts }) => ReactDOM.preload(href, opts));
  /* preloads PDS component core chunk from CDN for PDS component hydration (=> improve loading performance) */
  // getComponentChunkLinks({ components: ['tabs-bar', 'scroller', 'icon'], format: 'js' }).forEach(
  //   ({ href, ...opts }) => ReactDOM.preload(href, opts)
  // );
  /* preloads Porsche icons (=> minimize FOUC) */
  // getIconLinks({ format: 'js' }).forEach(ReactDOM.prefetchDNS);

  return (
    <html lang="en">
      <body>
        <PorscheDesignSystemProvider>
          <Header />
          <div className="pageLayout">{children}</div>
          <PToast />
        </PorscheDesignSystemProvider>
        <Partials />
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
