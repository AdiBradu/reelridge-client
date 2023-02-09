import React, { useState } from 'react';
// components
import { ReelRidgeLogo } from '../../../assets/logos/ReelRidgeLogo/ReelRidgeLogo';
import { Menu } from '../Menu/Menu';
// material ui
import { AppBar, Button, Drawer, Box } from '@mui/material';
import { styled } from '@mui/system';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  padding: '32px 16px',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.secondary.main,
  [theme.breakpoints.up('lg')]: {
    padding: '32px 128px',
  },
}));

const StyledButton = styled(Button)(() => ({
  minWidth: '0px',
  padding: '0px',
}));

const StyledIcon = styled(MenuRoundedIcon)(() => ({
  fontSize: '32px',
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '320px',
    },
  },
}));

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(isOpen);
    };

  return (
    <StyledAppBar elevation={0}>
      <ReelRidgeLogo />
      <StyledButton onClick={toggleDrawer(true)}>
        <StyledIcon color="primary" />
      </StyledButton>
      <StyledDrawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Menu toggleDrawer={toggleDrawer} />
      </StyledDrawer>
    </StyledAppBar>
  );
};
