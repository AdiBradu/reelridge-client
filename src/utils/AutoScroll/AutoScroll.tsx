import React, { useEffect } from 'react';
// utils
import { autoScroll } from '../utils';
// types
import { AutoScrollProps } from '../../types/types';

export const AutoScroll: React.FC<AutoScrollProps> = ({ id, movie }) => {
  useEffect(() => {
    autoScroll(id);
  }, [movie]);

  return null;
};
