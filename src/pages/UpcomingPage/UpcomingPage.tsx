import { lazy, Suspense } from 'react';
// components
import { LayoutPage } from '../../layouts/LayoutPage';
import { LayoutDefault } from '../../layouts/LayoutDefault';
import { SectionTitle } from '../../components/Typography/SectionTitle';
import { Spinner } from '../../components/Spinner/Spinner';
import { MemoizedNavbar } from '../../components/Navigation/Navbar/Navbar';
const UpcomingProvider = lazy(() =>
  import('../../components/MoviesProviders/UpcomingProvider').then(
    ({ UpcomingProvider }) => ({
      default: UpcomingProvider,
    }),
  ),
);

export const UpcomingPage: React.FC = () => {
  console.log('Upcoming Page render');
  return (
    <LayoutPage>
      <LayoutDefault>
        <MemoizedNavbar />
        <SectionTitle title="upcoming" />
        <Suspense fallback={<Spinner />}>
          <UpcomingProvider />
        </Suspense>
      </LayoutDefault>
    </LayoutPage>
  );
};
