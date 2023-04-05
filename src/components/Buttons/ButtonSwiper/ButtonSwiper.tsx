// material ui
import { Button, ButtonProps, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import theme from '../../../styles/theme';
// types
import { ButtonSwiperProps } from '../../../types/types';

interface ButtonDirectionProps extends ButtonProps {
  direction: 'left' | 'right';
}

const ButtonDirection = styled(Button, {
  shouldForwardProp: (direction) => direction !== 'left',
})<ButtonDirectionProps>(({ theme, direction }) => ({
  ...(direction === 'right' && {
    right: 0,
  }),
  ...(direction === 'left' && {
    left: 0,
  }),
  width: '48px',
  height: '100%',
  position: 'fixed',
  top: 0,
  zIndex: 1600,
  opacity: 0.3,
  transition: 'all ease-in-out 200ms',
  '&:hover': {
    background:
      'linear-gradient(0.37deg, rgba(255, 168, 69, 0) 0%, rgba(255, 168, 69, 0.006) 25%, rgba(255, 168, 69, 0.02) 50%, rgba(255, 168, 69, 0.006) 75%, rgba(255, 168, 69, 0) 100%), linear-gradient(179.63deg, rgba(255, 168, 69, 0) 0%, rgba(255, 168, 69, 0.006) 25%, rgba(255, 168, 69, 0.02) 50%, rgba(255, 168, 69, 0.006) 75%, rgba(255, 168, 69, 0) 100%)',
    opacity: 1,
  },
  [theme.breakpoints.up('lg')]: {
    width: '64px',
    height: '100vh',
  },
}));

export const ButtonSwiper: React.FC<ButtonSwiperProps> = ({
  direction,
  handleSwiperNavigation,
}) => {
  const mobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      {!mobile && (
        <ButtonDirection
          direction={direction}
          onClick={() => handleSwiperNavigation(direction)}
          aria-label={`Slide ${direction}`}
          id={`swiperButton${direction}`}
        >
          {direction === 'left' ? (
            <ArrowBackIosNewRoundedIcon />
          ) : (
            <ArrowForwardIosRoundedIcon />
          )}
        </ButtonDirection>
      )}
    </>
  );
};
