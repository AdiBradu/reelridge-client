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
import { transformFourDigitNumbers } from '../../utils/utils';

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
        <Heading2 text={movie?.title} />
        <HeaderBody>
          <HeaderBodyInfo>
            <Heading3 text={movie?.release_date} />
            <Caption text={'release date'} />
          </HeaderBodyInfo>
          <HeaderBodyInfo>
            <Heading3 text={roundToOneDecimalPlace(movie?.rating)} />
            <Caption text={'rating'} />
          </HeaderBodyInfo>
          <HeaderBodyInfo>
            <Heading3 text={transformFourDigitNumbers(movie?.votes)} />
            <Caption text={'votes'} />
          </HeaderBodyInfo>
        </HeaderBody>
      </Header>
      <Body text={movie?.overview} />
    </MovieWrapper>
  );
};

export const MemoizedMovie = memo(Movie);
