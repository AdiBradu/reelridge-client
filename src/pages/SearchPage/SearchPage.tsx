import React from 'react';
// components
import { LayoutDefault } from '../../layouts/LayoutDefault';
import { SectionTitle } from '../../components/Typography/SectionTitle';
import { FormGroup } from '../../components/Forms/FormGroup';
import { FormSearch } from '../../components/Forms/FormSearch';
import { SearchProvider } from '../../components/MoviesProviders/SearchProvider';

export const SearchPage: React.FC = () => {
  console.log('Search Page render');
  return (
    <LayoutDefault>
      <SectionTitle title="search TMDB" />
      <FormGroup>
        <FormSearch />
      </FormGroup>
      <SearchProvider />
    </LayoutDefault>
  );
};
