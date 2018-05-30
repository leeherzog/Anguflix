import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movieModel';
import {UserService} from '../user.service';


@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.css']
})
export class AllmoviesComponent implements OnInit {
  movies = new Array<Movie>();
  movie: Movie;
  filterTerm: string;
  constructor(private moviesService: MoviesService, private userService: UserService) {
    this.movies = moviesService.getMovies();
   }

  ngOnInit() {
  }

  purchase(movie, idx){
    if (this.userService.getUser().budget - movie.price > 0) {
    this.userService.purchase(movie.price);
    this.moviesService.addMyMovies(movie);
    this.moviesService.removeMovie(movie, idx);}
    else {
    return alert("Not enough money to purchase!")
  }
  }

  
}






  
