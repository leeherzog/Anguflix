import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movieModel';
import {AllmoviesComponent} from '../allmovies/allmovies.component';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../user.service';


@Component({
  selector: 'app-movie-extra',
  templateUrl: './movie-extra.component.html',
  styleUrls: ['./movie-extra.component.css']
})
export class MovieExtraComponent implements OnInit {
  public movie : Movie;
  public paramId: number;
  public index: number;
  constructor(private moviesService: MoviesService, private userService: UserService, private route : ActivatedRoute, private router : Router) {
   
   }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.paramId = params.id;
      this.moviesService.getMovies().subscribe((data) => {
        for (let i =0; i < this.moviesService.MOVIES.length; i++){
          if (this.moviesService.MOVIES[i]._id == this.paramId){
            this.index = i;}
          };
        this.movie = this.moviesService.MOVIES[this.index]});
        }
    );
}

purchase(movie, id) {
  if (this.userService.getUser().budget - movie.price > 0) {
  this.userService.purchase(movie.price);
  this.userService.addMyMovies(movie);
  this.moviesService.removeMovie(id);
// return true
}

}
}
