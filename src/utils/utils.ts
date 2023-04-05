import { UpcomingProps } from '../types/types';
// Round a number to one decimal place
export const roundToOneDecimalPlace = (input: number | string | undefined) => {
  if (input) {
    const number = Number(input);
    return Math.round(number * 10) / 10;
  } else return;
};

// transform number with and over 3 digits into pattern X.Xk. E.g. 1294 => 1.3k
export const transformNumberOverFourDigits = (input: number | string | undefined) => {
  if (input) {
    const number = Number(input);
    const length = (Math.log(number) * Math.LOG10E + 1) | 0;
    if (length < 4) {
      return number;
    } else {
      const toBeDividedWith = Number('1'.padEnd(length, '0'));
      return `${Math.round((number / toBeDividedWith) * 10) / 10}k`;
    }
  } else return;
};

export const dataNotIncluded = (array: UpcomingProps[], data: UpcomingProps[]) => {
  if (array && data) {
    return !array.includes(data[0]);
  } else return;
};

export const includesTitle = (
  titles: (string | undefined)[],
  title: string | undefined,
) => {
  if (titles && title) {
    return titles.includes(title);
  } else return;
};

export const filterMoviesById = (movies: UpcomingProps[], currentSlide: number) => {
  return movies.filter((movie) => movie.id === movies[currentSlide].id);
};

export const filterMoviesByIndex = (movies: UpcomingProps[], currentSlide: number) => {
  return movies.filter((movie) => movies.indexOf(movie) === currentSlide)[0].id;
};
