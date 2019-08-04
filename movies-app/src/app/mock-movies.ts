/*
Create data which resembles JSON data in a TypeScript file.
*/
import { Movie } from './movie';

export const MOVIES: Movie[] = [
  {
    id: 1,
    name: 'Stranger Things',
    image: 'stranger_things.jpg',
    genres: ['Drama', 'Fantasy', 'Horror', 'Mystery', 'Sci-Fi', 'Thriller'],
    series: true
  },
  {
    id: 2,
    name: 'Avengers: Endgame',
    image: 'avengers_endgame.jpg',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    series: false
  },
  {
  id: 3,
  name: 'Game Of Thrones',
  image: 'game_of_thrones.jpg',
  genres: ['Action', 'Adventure', 'Drama', 'Fantasy', 'Romance'],
  series: true
  },
  {
  id: 4,
  name: 'The Fate of the Furious',
  image: 'the_fate_of_the_furious.jpg',
  genres: ['Action', 'Adventure', 'Thriller'],
  series: false
  },
  {
  id: 5,
  name: 'Vantage Point',
  image: 'vantage_point.jpg',
  genres: ['Action', 'Crime', 'Drama', 'Mystery', 'Thriller'],
  series: false
  }
];
