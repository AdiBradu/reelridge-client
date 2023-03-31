import { lazy, Suspense } from 'react';
// components
import { LayoutPage } from '../../layouts/LayoutPage';
import { LayoutDefault } from '../../layouts/LayoutDefault';
import { SectionTitle } from '../../components/Typography/SectionTitle';
import { MemoizedNavbar } from '../../components/Navigation/Navbar/Navbar';
import { Spinner } from '../../components/Spinner/Spinner';
const WatchLaterProvider = lazy(() =>
  import('../../components/MoviesProviders/WatchLaterProvider').then(
    ({ WatchLaterProvider }) => ({
      default: WatchLaterProvider,
    }),
  ),
);

export const WatchLaterPage: React.FC = () => {
  console.log('WatchLater Page render');
  return (
    <LayoutPage>
      <LayoutDefault>
        <MemoizedNavbar />
        <SectionTitle title="watch later" />
        <Suspense fallback={<Spinner />}>
          <WatchLaterProvider />
        </Suspense>
      </LayoutDefault>
    </LayoutPage>
  );
};
