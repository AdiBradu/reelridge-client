import React from 'react';
// components
import { LayoutDefault } from '../../layouts/LayoutDefault';
import { SectionTitle } from '../../components/Typography/SectionTitle';
import { UpcomingProvider } from '../../components/MoviesProviders/UpcomingProvider';

export const UpcomingPage: React.FC = () => {
  console.log('Upcoming Page render');
  return (
    <LayoutDefault>
      <SectionTitle title="upcoming" />
      <UpcomingProvider />
    </LayoutDefault>
  );
};
