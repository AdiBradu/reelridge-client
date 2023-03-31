// components
import { LayoutPage } from '../../layouts/LayoutPage';
import { LayoutDefault } from '../../layouts/LayoutDefault';
import { SectionTitle } from '../../components/Typography/SectionTitle';
import { FormRegister } from '../../components/Forms/FormRegister';
import { FormGroup } from '../../components/Forms/FormGroup';
import { MemoizedNavbar } from '../../components/Navigation/Navbar/Navbar';

export const RegisterPage: React.FC = () => {
  console.log('Register Page render');
  return (
    <LayoutPage>
      <LayoutDefault>
        <MemoizedNavbar />
        <SectionTitle title="register" />
        <FormGroup>
          <FormRegister />
        </FormGroup>
      </LayoutDefault>
    </LayoutPage>
  );
};
