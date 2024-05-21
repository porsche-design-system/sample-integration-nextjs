'use client';

import { PButton, PIcon, PLinkPure } from '@porsche-design-system/components-react/ssr';
import React, { useEffect } from 'react';
import { defineCustomElements } from '@porschehn/navigation/loader';

export default function PhnHeaderPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      defineCustomElements(window);
    }
  }, []);

  return (
    <>
      <phn-header env="preview" locale="de-DE" style={{ position: 'absolute', left: 0, right: 0 }} />

      <div style={{ paddingTop: 180 }}>
        <PButton>Some PButton</PButton>
        <br />
        <br />
        <PLinkPure href="https://porsche.com">Some PLinkPure</PLinkPure>
        <br />
        <br />
        <PIcon name="configurate" />
        <PIcon name="compare" />
        <PIcon name="search" />
      </div>
    </>
  );
}
