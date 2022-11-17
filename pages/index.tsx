import { PText } from '@porsche-design-system/components-react/ssr';
import React from 'react';
import Header from '../components/header';

const Home = (): JSX.Element => (
  <div className="pageLayout">
    <Header />
    <PText>To See example usage click on one of the Links above.</PText>
  </div>
);

export default Home;
