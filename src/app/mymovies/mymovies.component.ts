import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movieModel'
import {UserService} from '../user.service'

@Component({
  selector: 'app-mymovies',
  templateUrl: './mymovies.component.html',
  styleUrls: ['./mymovies.component.css']
})
export class MymoviesComponent implements OnInit {
  myMovies = new Array<Movie>();
  deleteOn: boolean = false;
  constructor(private moviesService: MoviesService, private userService: UserService) { 
  this.myMovies = userService.getMyMovies();
}

  ngOnInit() {
  }

  removePurchase(movie, idx){
    this.userService.deleteMyMovie(movie, idx);
    this.moviesService.addMovie(movie);
    this.userService.deletePurchase(movie.price);
  }

  activateDelete() {
    this.deleteOn = !this.deleteOn;
  }
}
