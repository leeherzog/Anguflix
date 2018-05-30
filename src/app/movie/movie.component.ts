import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movieModel';
import {AllmoviesComponent} from '../allmovies/allmovies.component';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie = new Movie();

  constructor() {
    
   }

  ngOnInit() {
  }

 
}
