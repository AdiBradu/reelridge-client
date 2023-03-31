import { lazy, Suspense } from 'react';
// components
import { LayoutPage } from '../../layouts/LayoutPage';
import { LayoutDefault } from '../../layouts/LayoutDefault';
import { SectionTitle } from '../../components/Typography/SectionTitle';
import { FormGroup } from '../../components/Forms/FormGroup';
import { FormSearch } from '../../components/Forms/FormSearch';
import { MemoizedNavbar } from '../../components/Navigation/Navbar/Navbar';
import { Spinner } from '../../components/Spinner/Spinner';
const SearchProvider = lazy(() =>
  import('../../components/MoviesProviders/SearchProvider').then(
    ({ SearchProvider }) => ({
      default: SearchProvider,
    }),
  ),
);

export const SearchPage: React.FC = () => {
  console.log('Search Page render');
  return (
    <LayoutPage>
      <LayoutDefault>
        <MemoizedNavbar />
        <SectionTitle title="search TMDB" />
        <FormGroup>
          <FormSearch />
        </FormGroup>
        <Suspense fallback={<Spinner />}>
          <SearchProvider />
        </Suspense>
      </LayoutDefault>
    </LayoutPage>
  );
};
