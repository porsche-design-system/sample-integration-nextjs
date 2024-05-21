import { PorscheDesignSystemProvider, PToast } from '@porsche-design-system/components-react/ssr';
import {
  getBrowserSupportFallbackScript,
  getComponentChunkLinks,
  getCookiesFallbackScript,
  getDSRPonyfill,
  getFontLinks,
  getIconLinks,
  getMetaTagsAndIconLinks,
} from '@porsche-design-system/components-react/partials';
import { preload, prefetchDNS } from 'react-dom';
import { Header, Partials } from '../components';
import '../styles.scss';
import { Metadata, Viewport } from 'next';

const title = 'NextJS sample project';

const { themeColor, appleWebApp, icons, manifest } = getMetaTagsAndIconLinks({
  appTitle: title,
  format: 'js',
});

/* injects meta theme-color. */
export const viewport: Viewport = {
  themeColor,
};

/* injects favicon, apple touch icons, android touch icons, etc. */
export const metadata: Metadata = {
  title,
  appleWebApp,
  icons,
  // Next currently automatically applies `crossorigin="use-credentials"` to the link which causes a CORS Error in the manifest link (Will be fixed in upcoming Next version)
  // manifest,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* preloads Porsche Next font (=> minimize FOUT) */
  getFontLinks({ format: 'js' }).forEach(({ href, options }) => preload(href, options));
  /* preloads PDS component core chunk from CDN for PDS component hydration (=> improve loading performance) */
  getComponentChunkLinks({ components: ['tabs-bar', 'scroller', 'icon'], format: 'js' }).forEach(({ href, options }) =>
    preload(href, options)
  );
  /* preloads Porsche icons (=> minimize FOUC) */
  getIconLinks({ format: 'js' }).forEach(({ href }) => prefetchDNS(href));

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
