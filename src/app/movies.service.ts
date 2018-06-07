import { Injectable } from '@angular/core';
import { Movie } from './movieModel';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public MOVIES: Array<Movie> = [];
  public searchTerm: string;
  constructor(private http : HttpClient) {
    this.MOVIES = this.MOVIES;
   }

  getMovies(): Observable<Movie[]> {
    if (this.searchTerm == '') {
   var movieList = this.http.get<Movie[]>('https://anguflix-api.herokuapp.com/api/movies');
    movieList.subscribe((movies) => this.MOVIES = movies);
    return movieList;
    }
    else {
      var movieList = this.http.get<Movie[]>('https://anguflix-api.herokuapp.com/api/movies?title='+this.searchTerm);
    movieList.subscribe((movies) => this.MOVIES = movies);
    return movieList;
    }
  }

  filter(newTerm) {
    this.searchTerm = newTerm;
  }

  removeMovie(id: number) {
    for (let i =0; i < this.MOVIES.length; i++){
        if (this.MOVIES[i]._id == id){
          this.MOVIES.splice(i,1);
          console.log(this.MOVIES)
  }
}
  }

  addMovie(movie: Movie) {
    this.MOVIES.push(movie);
  }

 
}
