import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { UpdateFilmsComponent } from './update-films/update-films.component';
const routes: Routes = [
  {path: "movies", component : MoviesComponent},
  {path: "home", component : HomeComponent},
  {path: "addmovies", component : AddmoviesComponent},
  {path: "updateFilms/:id", component: UpdateFilmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
