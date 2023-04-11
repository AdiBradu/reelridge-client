// types
import { UpcomingProps } from '../types/types';
// assets
import tmdb from '../assets/images/tmdb.jpg';

export class MovieModel {
  id: number | undefined;
  title: string | undefined;
  release_date: string | undefined;
  image_path: string | undefined;
  overview: string | undefined;
  rating: string | undefined;
  votes: string | undefined;

  constructor(movie: UpcomingProps) {
    this.id = movie?.id ? movie.id : 0;
    this.title = movie?.title ? movie.title : 'No Title Provided';
    this.release_date = movie?.release_date ? movie.release_date : 'Unknown';
    this.image_path = movie?.image_path
      ? `https://image.tmdb.org/t/p/w500${movie.image_path}`
      : `http://localhost:5173/${tmdb}`;
    this.overview = movie?.overview
      ? movie.overview
      : 'Coming soon: a thrilling new movie that will keep you on the edge of your seat! Stay tuned for more information about this pulse-pounding adventure. Generated with chatGPT.';
    this.rating = movie?.rating ? movie.rating : '0';
    this.votes = movie?.votes ? movie.votes : '0';
  }
}
