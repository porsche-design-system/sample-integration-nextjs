import { PTabsBar, PText } from '@porsche-design-system/components-react/ssr';
import React from 'react';
import Header from '../components/header';

const LayoutShiftPage = (): JSX.Element => (
  <div className="pageLayout">
    {/* <Header /> */}

    <PTabsBar activeTabIndex={0} style={{ height: '36px' }}>
      <button>Tab 1</button>
      <button>Tab 2</button>
      <button>Tab 3</button>
    </PTabsBar>

    <PText>Content after PTabsBar</PText>
  </div>
);

export default LayoutShiftPage;
