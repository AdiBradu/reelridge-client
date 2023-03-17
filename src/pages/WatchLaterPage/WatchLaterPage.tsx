import React from 'react';
// components
import { LayoutDefault } from '../../layouts/LayoutDefault';
import { SectionTitle } from '../../components/Typography/SectionTitle';
import { WatchLaterProvider } from '../../components/MoviesProviders/WatchLaterProvider';

export const WatchLaterPage: React.FC = () => {
  console.log('WatchLater Page render');
  return (
    <LayoutDefault>
      <SectionTitle title="watch later" />
      <WatchLaterProvider />
    </LayoutDefault>
  );
};
