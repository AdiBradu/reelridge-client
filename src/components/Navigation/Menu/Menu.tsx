import React from 'react';
// material ui
import { Box, Stack, Button } from '@mui/material';
import { styled } from '@mui/system';
// components
import { MenuItem } from './MenuItem';
import { BackIcon } from '../../../assets/icons/BackIcon';
//types
import { MenuProps } from '../../../types/types';
// hardcoded data
import { Links } from './Links';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.secondary.main,
  padding: '32px 16px',
}));

const StyledStack = styled(Stack)(() => ({ gap: '16px' }));

const StyledButton = styled(Button)(() => ({
  minWidth: '0px',
  padding: '0px',
  justifyContent: 'flex-end',
}));

export const Menu: React.FC<MenuProps> = ({ toggleDrawer }) => {
  return (
    <StyledBox
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <StyledStack>
        <StyledButton onClick={toggleDrawer(false)}>
          <BackIcon />
        </StyledButton>
        {Links.map((link) => (
          <MenuItem key={link.id} name={link.name} icon={link.icon} url={link.url} />
        ))}
      </StyledStack>
    </StyledBox>
  );
};
