import { Fragment } from 'react';
// material ui
import { Box } from '@mui/material';
import { styled } from '@mui/system';
// components
import { Body } from '../../Typography/Body';
// router
import { useLocation } from 'react-router-dom';
// types
import { ButtonLoadMoreProps } from '../../../types/types';

const StyledBox = styled(Box)(() => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ButtonLoadMore: React.FC<ButtonLoadMoreProps> = ({
  pageNumber,
  handlePageNumber,
}) => {
  const location = useLocation();

  return (
    <Fragment>
      {location.pathname !== '/watchlater' && pageNumber && (
        <StyledBox
          className="mySwiperSlide"
          onClick={() => handlePageNumber?.(pageNumber)}
        >
          <Body text={'Load more'} aria-label={'Load more movies'} />
        </StyledBox>
      )}
    </Fragment>
  );
};
