// material ui
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
// styles
import './App.css';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  backgroundColor: theme.palette.secondary.main,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main700,
}));

export const App = () => {
  return (
    <StyledBox>
      <StyledTypography variant="h1">Upcomigs</StyledTypography>
    </StyledBox>
  );
};
