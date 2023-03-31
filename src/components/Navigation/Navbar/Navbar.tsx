import { memo, useState } from 'react';
// components
import { ReelRidgeLogo } from '../../../assets/logos/ReelRidgeLogo/ReelRidgeLogo';
import { Menu } from '../Menu/Menu';
import { WelcomeUser } from '../WelcomeUser/WelcomeUser';
// material ui
import { AppBar, Button, Drawer, Stack } from '@mui/material';
import { styled } from '@mui/system';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// router
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  paddingTop: '32px',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  background: 'transparent',
  [theme.breakpoints.up('lg')]: {
    paddingTop: '32px',
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
      width: '240px',
    },
  },
}));

export const Navbar: React.FC = () => {
  console.log('Navbar render');
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
      <Link to={'/'}>
        <ReelRidgeLogo />
      </Link>
      <Stack
        direction={'row'}
        spacing={{ xs: 1, lg: 4 }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <WelcomeUser />
        <StyledButton onClick={toggleDrawer(true)} aria-label={'Menu Toggler'}>
          <StyledIcon color="primary" />
        </StyledButton>
      </Stack>
      <StyledDrawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Menu toggleDrawer={toggleDrawer} />
      </StyledDrawer>
    </StyledAppBar>
  );
};

export const MemoizedNavbar = memo(Navbar);
