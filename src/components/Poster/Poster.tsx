import { memo } from 'react';
// // styles
import '../../styles/animationPoster.css';
// material ui
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../styles/theme';
// types
import { MovieProps } from '../../types/types';
// assets
import tmdb from '../../assets/images/tmdb.jpg';

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

const StyledImage = styled('img')(() => ({
  objectFit: 'cover',
  background: `linear-gradient(218.23deg, rgba(32, 31, 36, 0.4) 0%, rgba(32, 31, 36, 0) 100%), linear-gradient(270deg, rgba(32, 31, 36, 0.2) 0%, #201F24 100%), linear-gradient(180deg, rgba(32, 31, 36, 0.2) 0%, #201F24 97.97%)`,
  backgroundBlendMode: 'normal',
}));

const base_url = 'https://image.tmdb.org/t/p/';
const poster_size = 'w500/';

export const Poster: React.FC<MovieProps> = ({ movie }) => {
  console.log('Poster render');

  return (
    <StyledBox>
      <Overlay />
      <StyledImage
        src={
          movie?.image_path ? `${base_url}${poster_size}/${movie.image_path}` : `${tmdb}`
        }
        alt={movie?.title ? movie.title : 'no title was provided'}
        width={'100%'}
        height={'100%'}
        id={'poster'}
      />
    </StyledBox>
  );
};

export const MemoizedPoster = memo(Poster);
