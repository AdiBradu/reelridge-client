import { memo } from 'react';
// material ui
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../styles/theme';
// types
import { MovieProps } from '../../types/types';

const StyledBox = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  minHeight: '100vh',
  marginTop: 0,
  zIndex: 101,
  background: theme.palette.secondary.main,
  [`@media screen and (orientation: portrait)`]: {
    width: '100%',
    height: '100vh',
  },
  [`@media screen and (orientation: landscape)`]: {
    width: '50%',
    height: '100%',
  },
}));

const Overlay = styled(Box)(() => ({
  position: 'absolute',
  inset: 0,
  zIndex: 105,
  background: `linear-gradient(218.23deg, rgba(32, 31, 36, 0.4) 0%, rgba(32, 31, 36, 0) 100%), linear-gradient(270deg, rgba(32, 31, 36, 0.2) 0%, #201F24 100%), linear-gradient(180deg, rgba(32, 31, 36, 0.2) 0%, #201F24 97.97%)`,
}));

export const Poster: React.FC<MovieProps> = ({ movie }) => {
  console.log('Poster render');

  return (
    <StyledBox>
      <Overlay />
      <img
        className={'poster'}
        src={movie?.image_path}
        alt={movie?.title}
        width={'100%'}
        height={'100%'}
        id={'poster'}
      />
    </StyledBox>
  );
};

export const MemoizedPoster = memo(Poster);
