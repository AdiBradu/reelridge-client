// material ui
import { styled, Typography } from '@mui/material';
// types
import { StatusProps } from '../../types/types';

const StatusTypography = styled(Typography)(() => ({
  zIndex: 105,
}));

export const Status: React.FC<StatusProps> = ({ text, color }) => {
  return (
    <StatusTypography variant="body1" color={color}>
      {text}
    </StatusTypography>
  );
};
