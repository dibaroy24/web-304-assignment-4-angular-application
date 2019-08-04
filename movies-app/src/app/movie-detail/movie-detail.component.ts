// We will need to import the Input module.
import { Component, OnInit, Input } from '@angular/core';

// We will also want to import our Movie interface from the movie.ts file.
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  /*
  We will need to add one property to this component class. This property will
  be called movie and will be a Movie interface type.
  */
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
