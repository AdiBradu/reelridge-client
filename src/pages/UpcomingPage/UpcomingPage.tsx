// components
import { LayoutPage } from '../../layouts/LayoutPage';
import { LayoutDefault } from '../../layouts/LayoutDefault';
import { SectionTitle } from '../../components/Typography/SectionTitle';
import { MemoizedNavbar } from '../../components/Navigation/Navbar/Navbar';
import { UpcomingProvider } from '../../components/MoviesProviders/UpcomingProvider';

export const UpcomingPage: React.FC = () => {
  console.log('Upcoming Page render');
  return (
    <LayoutPage>
      <LayoutDefault>
        <MemoizedNavbar />
        <SectionTitle title="upcoming" />
        <UpcomingProvider />
      </LayoutDefault>
    </LayoutPage>
  );
};
