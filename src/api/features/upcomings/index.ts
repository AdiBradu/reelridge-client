import axios from 'axios';
// type
import { UpcomingProps } from '../../../types/types';
// models
import { MovieModel } from '../../../models/MovieModel';

export const getUpcomingMovies = async (
  pageNumber: number,
): Promise<UpcomingProps[] | undefined> => {
  try {
    const response = await axios.post('http://localhost:5050/upcomings', {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
      },
      data: {
        page: pageNumber,
      },
    });
    return response.data.map((movie: UpcomingProps) => new MovieModel(movie));
  } catch (error) {
    console.error(error);
  }
};
