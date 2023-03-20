import React from 'react';
// components
import { Caption } from '../../Typography/Caption';
// material ui
import { Button } from '@mui/material';
// router
import { Link } from 'react-router-dom';

export const ButtonLogin: React.FC = () => {
  console.log('ButtonLogin render');

  return (
    <Link to="/login">
      <Button>
        <Caption text={'login to add movie'} />
      </Button>
    </Link>
  );
};

export const MemoizedButtonLogin = React.memo(ButtonLogin);
