// components
import { LayoutPage } from '../../layouts/LayoutPage';
import { LayoutDefault } from '../../layouts/LayoutDefault';
import { SectionTitle } from '../../components/Typography/SectionTitle';
import { FormGroup } from '../../components/Forms/FormGroup';
import { FormLogin } from '../../components/Forms/FormLogin';
import { MemoizedNavbar } from '../../components/Navigation/Navbar/Navbar';

export const LoginPage: React.FC = () => {
  console.log('Login Page render');
  return (
    <LayoutPage>
      <LayoutDefault>
        <MemoizedNavbar />
        <SectionTitle title="login" />
        <FormGroup>
          <FormLogin />
        </FormGroup>
      </LayoutDefault>
    </LayoutPage>
  );
};
