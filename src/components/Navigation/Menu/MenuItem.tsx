import React from 'react';
// material ui
import { Button, Typography, Stack } from '@mui/material';
import { styled } from '@mui/system';
// types
import { MenuItemProps } from '../../../types/types';
// routing
import { Link } from 'react-router-dom';
// redux
import { useAppSelector } from '../../../api/hooks/hooks';

const StyledButton = styled(Button)(() => ({
  padding: '0px',
  minWidth: '0px',
  marginLeft: 'auto',
  '&:hover': {
    opacity: 0.5,
  },
}));

const StyledStack = styled(Stack)(() => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '24px',
  justifyContent: 'right',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main100,
  textTransform: 'capitalize',
}));

export const MenuItem: React.FC<MenuItemProps> = ({ name, icon, url }) => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return (
    <React.Fragment>
      {isLoggedIn && name === 'login' ? (
        <></>
      ) : (
        <Link to={url}>
          <StyledButton>
            <StyledStack>
              <StyledTypography variant="body1" align="left">
                {name}
              </StyledTypography>
              {icon}
            </StyledStack>
          </StyledButton>
        </Link>
      )}
    </React.Fragment>
  );
};
