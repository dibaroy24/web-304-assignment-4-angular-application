/*
Create data which resembles JSON data in a TypeScript file.
*/
import { Movie } from './movie';

export const MOVIES: Movie[] = [
  {
    id: 1,
    name: 'Stranger Things',
    image: 'stranger_things.jpg',
    trailer: 'stranger_things_3_official_final_trailer_360p.mp4',
    genres: ['Drama', 'Fantasy', 'Horror', 'Mystery', 'Sci-Fi', 'Thriller'],
    series: true
  },
  {
    id: 2,
    name: 'Avengers: Endgame',
    image: 'avengers_endgame.jpg',
    trailer: 'avengers_endgame_official_trailer_360p.mp4',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    series: false
  },
  {
  id: 3,
  name: 'You',
  image: 'you.jpg',
  trailer: 'you_lifetime_trailer_360p.mp4',
  genres: ['Crime', 'Drama', 'Romance', 'Thriller'],
  series: true
  },
  {
  id: 4,
  name: 'The Fate of the Furious',
  image: 'the_fate_of_the_furious.jpg',
  trailer: 'fast_furious_8_official_trailer_360p.mp4',
  genres: ['Action', 'Adventure', 'Thriller'],
  series: false
  },
  {
  id: 5,
  name: 'Vantage Point',
  image: 'vantage_point.jpg',
  trailer: 'vantage_point_trailer_360p.mp4',
  genres: ['Action', 'Crime', 'Drama', 'Mystery', 'Thriller'],
  series: false
  }
];
