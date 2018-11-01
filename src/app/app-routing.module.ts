import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component'
import { MoviesComponent } from './movies/movies.component'
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
const routes: Routes = [
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'add-movie',
    component: AddMovieComponent
  },
  {
    path: 'update-movie',
    component: UpdateMovieComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
