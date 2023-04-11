import axios from 'axios';
// models
import { MovieModel } from '../../../models/MovieModel';
import { UpcomingProps } from '../../../types/types';

export const searchMovie = async (search: { query: string; pageNumber: number }) => {
  try {
    console.log('searching');
    const response = await axios.post('http://localhost:5050/search', {
      headers: {
        'Access-Control-Allow-Origin': 'http://192.168.1.9:5173',
      },
      data: {
        query: search.query,
        page: search.pageNumber,
      },
    });
    return response.data.map((movie: UpcomingProps) => new MovieModel(movie));
  } catch (error) {
    console.error(error);
  }
};
