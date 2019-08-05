import { Injectable } from '@angular/core';

// Import interface and data
import { Movie } from './movie';
import { MOVIES } from './mock-movies';
/*
RxJS is library for creating asychronous, event-based programs.

RxJS uses a concept called observables. Observables work very similarly
to promises with some technical differences which can affect the
behaviour of an app.

A promise will either return a value when the promise is received
or an error message if the promise is rejected. Promises can not be cancelled.

What this means is that promises which are tiggered by events such as
a keyup will run every time the event is triggered.

Unlike promises, observables can be cancelled.
*/
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  /*
  The getMoviesFromData() method should return an Observable type which takes a
  generic type of an array of movies.

  The of() function is itself an observable.
  */
  getMoviesFromData(): Observable<Movie[]> {
    return of(MOVIES);
  }

  /*
  We will create a new method which will filter through our movies and retun the
  one which matches an id property from the :id parameter in the URL.
  */
  getMovieFromData(id): Observable<Movie> {
    return of(MOVIES.find(movie => movie.id === id));
  }
}
