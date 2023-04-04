import axios from 'axios';
//type
import { UpcomingProps } from '../../../types/types';

export const addToWatchLater = async (
  movie: UpcomingProps,
): Promise<UpcomingProps | undefined> => {
  try {
    if (movie) {
      const response = await axios.post(
        'http://localhost:5050/watchlater',
        {
          data: {
            movie_id: movie.id,
            title: movie.title,
            release_date: movie.release_date,
            image_path: movie.image_path,
            overview: movie.overview,
            rating: movie.rating,
            votes: movie.votes,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5173',
            Authorization: `token ${sessionStorage.getItem('token')}`,
          },
        },
      );
      return response.data;
    }
  } catch (error) {
    console.error('My error', error);
  }
};

export const removeFromWatchLater = async (
  id: number | undefined,
): Promise<UpcomingProps | undefined> => {
  try {
    if (id) {
      const response = await axios.delete(`http://localhost:5050/watchlater`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:5173',
          Authorization: `token ${sessionStorage.getItem('token')}`,
        },
        data: {
          movieId: id,
        },
      });
      return response.data;
    }
  } catch (error) {
    console.error('My error', error);
  }
};

export const getWatchlaterMovies = async () => {
  try {
    const response = await axios.get(`http://localhost:5050/watchlater`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        Authorization: `token ${sessionStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
