import React from 'react';
// components
import { LayoutDefault } from '../../layouts/LayoutDefault';
import { SectionTitle } from '../../components/Typography/SectionTitle';
import { FormRegister } from '../../components/Forms/FormRegister';
import { FormGroup } from '../../components/Forms/FormGroup';

export const RegisterPage: React.FC = () => {
  console.log('Register Page render');
  return (
    <LayoutDefault>
      <SectionTitle title="register" />
      <FormGroup>
        <FormRegister />
      </FormGroup>
    </LayoutDefault>
  );
};
