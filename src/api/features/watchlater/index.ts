import axios from 'axios';
//type
import { UpcomingProps } from '../../../types/types';

console.log(sessionStorage.getItem('token'));

export const addToWatchLater = async (
  title: string,
  release_date: Date,
  image_path: string,
  overview: string,
  rating: string,
  votes: string,
): Promise<UpcomingProps | undefined> => {
  try {
    const response = await axios.post('http://localhost:5050/movies', {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
      data: {
        title: title,
        release_date: release_date,
        image_path: image_path,
        overview: overview,
        rating: rating,
        votes: votes,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
