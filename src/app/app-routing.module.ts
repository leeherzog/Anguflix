import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MoviesService } from './movies.service';
import { MymoviesComponent } from './mymovies/mymovies.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import {MovieExtraComponent} from './movie-extra/movie-extra.component'

const routes: Routes = [
  { path: '', component: AllmoviesComponent},
  { path: 'movieExtras/:id', component: MovieExtraComponent},
  { path: ':name', component: AllmoviesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
