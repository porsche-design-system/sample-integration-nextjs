'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { getFontFaceStyles, getInitialStyles } from '@porsche-design-system/components-react/partials';
import { useRef } from 'react';

export const Partials = () => {
  const isServerInserted = useRef(false);

  useServerInsertedHTML(() => {
    // There seems to be some strange behavior where Next calls this multiple times
    // To ensure this is only called once we use a ref
    if (!isServerInserted.current) {
      isServerInserted.current = true;
      return (
        <>
          {/* **necessary for SSR support**, injects stylesheet which defines visibility of pre-hydrated PDS components */}
          {getInitialStyles({ format: 'jsx' })}
          {/* injects stylesheet which defines Porsche Next CSS font-face definition (=> minimize FOUT) */}
          {getFontFaceStyles({ format: 'jsx' })}
        </>
      );
    }
  });

  return null;
};
