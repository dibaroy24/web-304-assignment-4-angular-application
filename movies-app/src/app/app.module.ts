import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
In the app module file, we will need to import the FormsModule module from
‘@angular/forms’ in order for the [(ngModel)] attribute to work.
*/
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    /*
    However, it is necessary to add the FormsModule module to the imports array
    of the parameter of the NgModule decorator in order for the [(ngModel)]
    attribute to work.
    */
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
