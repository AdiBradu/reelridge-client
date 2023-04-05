import React from 'react';
// material ui
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
// components
import { MemoizedHeading2 } from '../Typography/Heading2';
import { MemoizedHeading3 } from '../Typography/Heading3';
import { MemoizedBody } from '../Typography/Body';
import { Caption } from '../Typography/Caption';
// types
import { MovieProps } from '../../types/types';

const StyledStack = styled(Stack)(() => ({
  gap: '32px',
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

export const Movie: React.FC<MovieProps> = ({ movies, activeSlide }) => {
  console.log('Movie Render');

  return (
    <StyledStack>
      <Header>
        <MemoizedHeading2 text={movies[activeSlide]?.title} />
        <HeaderBody>
          <HeaderBodyInfo>
            <MemoizedHeading3 text={movies[activeSlide]?.release_date?.toString()} />
            <Caption text={'release date'} />
          </HeaderBodyInfo>
          <HeaderBodyInfo>
            <MemoizedHeading3 text={movies[activeSlide]?.rating} />
            <Caption text={'rating'} />
          </HeaderBodyInfo>
          <HeaderBodyInfo>
            <MemoizedHeading3 text={movies[activeSlide]?.votes} />
            <Caption text={'votes'} />
          </HeaderBodyInfo>
        </HeaderBody>
      </Header>
      <MemoizedBody text={movies[activeSlide]?.overview} />
    </StyledStack>
  );
};

export const MemoizedMovie = React.memo(Movie);
