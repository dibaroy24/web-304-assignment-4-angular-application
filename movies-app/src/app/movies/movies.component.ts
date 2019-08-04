import { Component, OnInit } from '@angular/core';

/*
Import our Movie interface from the movie.ts file. Because we are in the movies
component directory we will need to go up one directory level to access it.
*/
import { Movie } from '../movie';

/*
Import our MOVIES constant from the mock-movies.ts file. Because we are in the
movies component directory we will need to go up one directory level to access
it.
*/
import { MOVIES } from '../mock-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  /*
  Inside of the MoviesComponent class we will create a movies property which
  will store our HEROES constant as a Movie interface type array. We will also
  create a property called selectedMovie which will represent the movie which the
  user selects. This property will be a Movie interface type.
  */
  movies: Movie[] = MOVIES;
  selectedMovie: Movie;

  /*
  Under the constructor() method we will create a new method called onSelect()
  which will take in a movie parameter of a Movie interface type. It will then
  set the selectedMovie property of this class to equal the movie parameter.
  */

  constructor() { }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  ngOnInit() {
  }

}
