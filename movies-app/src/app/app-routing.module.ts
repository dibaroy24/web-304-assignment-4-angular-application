import { NgModule } from '@angular/core';
/*
We don't need the CommonModule.
*/
// import { CommonModule } from '@angular/common';
/*
We do need two modules called RouterModule and Routes.
*/
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

/*
We will create a const called routes which is set as a type of Routes and is
defined as an array of object literals.
Each object would have a path property which represents the path the user could
visit in their web browser to view a specific component/page.
*/
const routes: Routes = [
  /*
  We may also want to define routes which redirect to other paths.
  We will define a route which sets the root directory path to
  redirect to the movies component.
  */
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  /*
  We can include variable data in route paths. In the case of our hero detail
  path we are inserting the id property of the hero in the URL using the :id
  syntax.
  */
  { path: 'detail/:id', component: MovieDetailComponent }
];


@NgModule({
  /*
  In the @NgModule decorator, it has automatically inserted declarations and
  imports properties. We can remove the declarations property because we do not
  need to make this module directly accessible to components.
  */
  // declarations: [],
  /*
  In the imports array we would want to call the forRoot() method of the
  RouterModule and use our routes constant as a parameter to import our routes
  to the application.
  */
  imports: [
    RouterModule.forRoot(routes)
  ],
  /*
  We would need to add the exports property which is an array of modules to
  export for use in other modules.

  We want to list the RouterModule.
  */
  exports: [RouterModule]
})
export class AppRoutingModule { }
