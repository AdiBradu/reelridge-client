import React from 'react';
// material ui
import { Stack, Box } from '@mui/material';
import { styled } from '@mui/system';
// components
import { Heading2 } from '../Typography/Heading2';
import { Heading3 } from '../Typography/Heading3';
import { Body } from '../Typography/Body';
import { Caption } from '../Typography/Caption';
// types
import { UpcomingProps } from '../../types/types';
import { StyledTitleBoxProps } from '../../types/types';
// utils
import { autoScroll } from '../../utils/utils';
import { AutoScroll } from '../../utils/AutoScroll/AutoScroll';

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

const StyledTitleBox = styled(Box)<StyledTitleBoxProps>(({ theme }) => ({
  overflow: 'auto',
  whiteSpace: 'nowrap',
  height: '48px',
  [theme.breakpoints.up('lg')]: {
    height: '56px',
  },
}));

const StyledOverviewBox = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 5,
  WebkitBoxOrient: 'vertical',
  height: '160px',
  [theme.breakpoints.up('md')]: {
    width: '60%',
    WebkitLineClamp: 4,
    height: '128px',
  },
}));

export const Movie: React.FC<UpcomingProps> = ({
  id,
  title,
  release_date,
  image_path,
  overview,
  rating,
  votes,
}) => {
  return (
    <StyledStack>
      <Header>
        <StyledTitleBox id={'title'}>
          <AutoScroll id={'title'} movie={id} />
          <Heading2 text={title} />
        </StyledTitleBox>
        <HeaderBody>
          <HeaderBodyInfo>
            <Heading3 text={release_date?.toString()} />
            <Caption text={'release date'} />
          </HeaderBodyInfo>
          <HeaderBodyInfo>
            <Heading3 text={rating} />
            <Caption text={'rating'} />
          </HeaderBodyInfo>
          <HeaderBodyInfo>
            <Heading3 text={votes} />
            <Caption text={'votes'} />
          </HeaderBodyInfo>
        </HeaderBody>
      </Header>
      <StyledOverviewBox>
        <Body text={overview} />
      </StyledOverviewBox>
    </StyledStack>
  );
};
