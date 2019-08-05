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

// We will need to import our MovieService module from the movie.service.ts file.
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  /*
  Inside of the MoviesComponent class we will create a movies property which
  will store our MOVIES constant as a Movie interface type array. We will also
  create a property called selectedMovie which will represent the movie which the
  user selects. This property will be a Movie interface type.
  */
  movies: Movie[] = MOVIES;
  selectedMovie: Movie;

  /*
  In order to pass our MovieService class to our MoviesComponent class we need to
  insert it as the type of a parameter in our constructor method.
  */
  constructor(private movieService: MovieService) { }

  /*
  Under the constructor() method we will create a new method called onSelect()
  which will take in a movie parameter of a Movie interface type. It will then
  set the selectedMovie property of this class to equal the movie parameter.
  */
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  /*
  In the method we will call the getMoviesFromData() method of the movieService
  property and then use the subscribe() method instead of the then() method.

  As a parameter we are using a function to set the moviees property to the
  response parameter which holds the data returned in the AJAX response.
  */
  getMoviesFromService(): void {
    this.movieService.getMoviesFromData()
      .subscribe(response => this.movies = response);
  }

  /*
  We will then call the getMoviesFromService() method inside of the existing
  ngOnInit() method of this class to call this method as soon as the component
  is initialized.
  */
  ngOnInit() {
    this.getMoviesFromService();
  }

}
