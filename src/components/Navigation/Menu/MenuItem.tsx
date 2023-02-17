// material ui
import { Button, Typography, Stack } from '@mui/material';
import { styled } from '@mui/system';
// types
import { MenuItemProps } from '../../../types/types';
// routing
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)(() => ({
  padding: '0px',
  minWidth: '0px',
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
  return (
    <Link to={url}>
      <StyledButton>
        <StyledStack>
          <StyledTypography variant="h3" align="left">
            {name}
          </StyledTypography>
          {icon}
        </StyledStack>
      </StyledButton>
    </Link>
  );
};
