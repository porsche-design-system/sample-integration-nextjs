import React from 'react';
import { PButton, PIcon, PLinkPure } from '@porsche-design-system/components-react';
import Header from '../components/header';
import { applyPolyfills, defineCustomElements as definePorscheNavigation } from '@porschehn/navigation/loader';

applyPolyfills().then(() => {
  definePorscheNavigation(window);
});

const PhnHeaderPage = (): JSX.Element => (
  <div className="pageLayout">
    <Header />
    <phn-header env="preview" style={{ position: 'absolute', left: 0, right: 0 }} />

    <div style={{ paddingTop: 150 }}>
      <div>
        <PButton>Some PButton</PButton>
      </div>
      <div>
        <PLinkPure>Some PLinkPure</PLinkPure>
      </div>
      <div>
        <PIcon name="configurate" />
        <PIcon name="compare" />
        <PIcon name="search" />
      </div>
    </div>
  </div>
);

export default PhnHeaderPage;
