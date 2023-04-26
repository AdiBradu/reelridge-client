import { expect, test } from 'vitest';
import {
  roundToOneDecimalPlace,
  transformFourDigitNumbers,
  dataNotIncluded,
  includesTitle,
  filterMoviesById,
  filterMoviesByIndex,
} from './utils';
import { UpcomingProps } from '../types/types';

const movies: UpcomingProps[] = [
  {
    id: 502356,
    image_path: 'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
    overview:
      'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
    rating: '7.5',
    release_date: '2023-04-05',
    title: 'The Super Mario Bros. Movie',
    votes: '1389',
  },
  {
    id: 713704,
    image_path: 'https://image.tmdb.org/t/p/w500/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg',
    overview: 'A short description of the movie',
    rating: '7',
    release_date: '2023-04-12',
    title: 'Evil Dead Rise',
    votes: '170',
  },
  {
    id: 804150,
    image_path: 'https://image.tmdb.org/t/p/w500/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg',
    overview:
      'Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.',
    rating: '6.4',
    release_date: '2023-02-22',
    title: 'Cocaine Bear',
    votes: '862',
  },
];

describe('Test utility functions', () => {
  describe('Round to one decimal place', () => {
    test('Test with undefined input', () => {
      const input = void 0;
      expect(roundToOneDecimalPlace(input)).toBe(input);
    });
    test('Test with string input', () => {
      expect(roundToOneDecimalPlace('4.487')).toBe(4.5);
    });
    test('Test with number input', () => {
      expect(roundToOneDecimalPlace(4.487)).toBe(4.5);
    });
  });

  describe('Transform numbers of four digt and above into a shorter form like X.Xk, where k stands for thousand', () => {
    test('Test with undefined input', () => {
      const input = void 0;
      expect(transformFourDigitNumbers(input)).toBe(input);
    });
    test('Test with string input', () => {
      expect(transformFourDigitNumbers('4437')).toBe(`4.4k`);
    });
    test('Test with number input, greater than 1000', () => {
      expect(transformFourDigitNumbers(44372)).toBe(`44.4k`);
    });
    test('Test with number input, less than 1000', () => {
      expect(transformFourDigitNumbers(443)).toBe(443);
    });
  });

  describe('Find if first element of an array is included in a given array', () => {
    const array0: UpcomingProps[] = [
      {
        id: 502356,
        image_path: 'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
        overview:
          'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
        rating: '7.5',
        release_date: '2023-04-05',
        title: 'The Super Mario Bros. Movie',
        votes: '1389',
      },
    ];

    const array1: UpcomingProps[] = [
      {
        id: 502356,
        image_path: 'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
        overview:
          'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
        rating: '7.5',
        release_date: '2023-04-05',
        title: 'The Super Mario Bros. Movie',
        votes: '1389',
      },
      {
        id: 713704,
        image_path: 'https://image.tmdb.org/t/p/w500/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg',
        overview: '',
        rating: '7',
        release_date: '2023-04-12',
        title: 'Evil Dead Rise',
        votes: '170',
      },
      {
        id: 804150,
        image_path: 'https://image.tmdb.org/t/p/w500/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg',
        overview:
          'Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.',
        rating: '6.4',
        release_date: '2023-02-22',
        title: 'Cocaine Bear',
        votes: '862',
      },
    ];
    test('Test with given arrays, should return true', () => {
      expect(dataNotIncluded(array1, array0)).toBe(true);
    });
  });

  describe('Find if array of titles includes a specific title', () => {
    const titles = ['Batman', 'Superman', 'Spiderman', 'Captain America'];
    test('Test with undefined input', () => {
      const title = void 0;
      expect(includesTitle(titles, title)).toBe(title);
    });
    test('Test with string input', () => {
      const title = 'Captain America';
      expect(includesTitle(titles, title)).toBe(true);
    });
  });

  describe('Filter movies by id', () => {
    test('Test with match id', () => {
      const currentSlide = 1;
      const filteredMovie = {
        id: 713704,
        image_path: 'https://image.tmdb.org/t/p/w500/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg',
        overview: 'A short description of the movie',
        rating: '7',
        release_date: '2023-04-12',
        title: 'Evil Dead Rise',
        votes: '170',
      };
      expect(filterMoviesById(movies, currentSlide)).toStrictEqual([filteredMovie]);
    });
    test('Test with no match id, should not be contained', () => {
      const currentSlide = 3;
      expect(movies).not.toContain(movies[currentSlide]);
    });
  });

  describe('Filter movies by index', () => {
    test('Test with match index, should return movie with index provided', () => {
      const currentSlide = 1;
      expect(filterMoviesByIndex(movies, currentSlide)).toBe(713704);
    });
    test('Test with no match index, should not be contained', () => {
      const currentSlide = 3;
      expect(movies).not.toContain(movies[currentSlide]);
    });
  });
});
