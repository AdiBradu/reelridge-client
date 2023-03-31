import { memo } from 'react';
// material ui
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
// components
import { Heading2 } from '../Typography/Heading2';
import { Heading3 } from '../Typography/Heading3';
import { Body } from '../Typography/Body';
import { Caption } from '../Typography/Caption';
// types
import { MovieProps } from '../../types/types';
// utils
import { roundToOneDecimalPlace } from '../../utils/utils';
import { transformNumberOverFourDigits } from '../../utils/utils';

const MovieWrapper = styled(Stack)(({ theme }) => ({
  maxWidth: '640px',
  [theme.breakpoints.up('md')]: {
    maxWidth: '720px',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '960px',
  },
  gap: '32px',
  zIndex: '102',
}));

const Header = styled(Stack)(() => ({
  gap: '16px',
}));

const HeaderBody = styled(Stack)(() => ({
  gap: '40px',
  flexDirection: 'row',
}));

const HeaderBodyInfo = styled(Stack)(() => ({
  gap: '0px',
}));

export const Movie: React.FC<MovieProps> = ({ movie }) => {
  console.log('Movie Render');
  return (
    <MovieWrapper>
      <Header>
        <Heading2 text={movie?.title ? movie.title : 'No Title Provided'} />
        <HeaderBody>
          <HeaderBodyInfo>
            <Heading3
              text={movie?.release_date ? movie.release_date.toString() : 'Unknown'}
            />
            <Caption text={'release date'} />
          </HeaderBodyInfo>
          <HeaderBodyInfo>
            <Heading3 text={movie?.rating ? roundToOneDecimalPlace(movie.rating) : 0} />
            <Caption text={'rating'} />
          </HeaderBodyInfo>
          <HeaderBodyInfo>
            <Heading3
              text={movie?.votes ? transformNumberOverFourDigits(movie.votes) : 0}
            />
            <Caption text={'votes'} />
          </HeaderBodyInfo>
        </HeaderBody>
      </Header>
      <Body
        text={
          movie?.overview
            ? movie.overview
            : 'Coming soon: a thrilling new movie that will keep you on the edge of your seat! Stay tuned for more information about this pulse-pounding adventure. Generated with chatGPT.'
        }
      />
    </MovieWrapper>
  );
};

export const MemoizedMovie = memo(Movie);
