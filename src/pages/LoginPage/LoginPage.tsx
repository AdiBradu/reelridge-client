import React from 'react';
// components
import { LayoutDefault } from '../../layouts/LayoutDefault';
import { SectionTitle } from '../../components/Typography/SectionTitle';
import { FormGroup } from '../../components/Forms/FormGroup';
import { FormLogin } from '../../components/Forms/FormLogin';

export const LoginPage: React.FC = () => {
  console.log('Login Page render');
  return (
    <LayoutDefault>
      <SectionTitle title="login" />
      <FormGroup>
        <FormLogin />
      </FormGroup>
    </LayoutDefault>
  );
};
