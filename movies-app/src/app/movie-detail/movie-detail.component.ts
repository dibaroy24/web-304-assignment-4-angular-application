// We will need to import the Input module.
import { Component, OnInit, Input } from '@angular/core';

/*
We will need to import the ActivatedRoute module from the ‘@angular/router’
directory and the Location module from the ‘@angular/common’ directory.
*/
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

/*
We will also want to import our Movie interface and service from the
corresponding TS files.
*/
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

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

  constructor(
    private movieService: MovieService,
    /*
    We will then need to pass the modules we imported into the component class’
    constructor method as private properties.
    */
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getMovieFromService(): void {
    /*
    In this method we will define a const which retreives the :id parameter from
    the URL. To do this we need to call the get() method of the
    snapshot.paramMap property and use the name of the property we want to
    retreive from the URL as the parameter. We also need to preface this line
    with the + symbol (+ converts to number in JS) to convert it to a number.
    */
    const id = +this.route.snapshot.paramMap.get('id');

    /*
    We will then use the subscribe method. As a parameter of this method
    we will use a function to set the hero property to the response
    parameter which holds the data returned.
    */
    this.movieService.getMovieFromData(id)
      .subscribe(response => this.movie = response);
  }

  ngOnInit() {
    this.getMovieFromService();
  }

  /*
  We will also create a goBack() method which we can use to create a back button
  to get back to the previous route.
  */
  goBack(): void {
    this.location.back();
  }
}
