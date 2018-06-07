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
  value: boolean;
  searchTerm: string;
  haveMoney: boolean;

  constructor(private moviesService: MoviesService, private userService: UserService) {
    
   }

  ngOnInit() {
    this.moviesService.filter('');
    this.moviesService.getMovies().subscribe(() => {this.movies = this.moviesService.MOVIES});
  }

  updateTerm() {
   this.moviesService.filter(this.searchTerm.toLowerCase());
   this.moviesService.getMovies().subscribe(() => {this.movies = this.moviesService.MOVIES});
  }
  purchase(movie, id) {
    if (this.userService.getUser().budget - movie.price > 0) {
    this.userService.purchase(movie.price);
    this.userService.addMyMovies(movie);
    this.moviesService.removeMovie(id);
    this.haveMoney = false
}
    else {
    this.haveMoney = true;
    // alert("Not enough money to purchase!")
  }
  }

  
}






  
