import { Injectable } from '@angular/core';
import {User} from './userModel';
import { Movie } from './movieModel';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

const user: User = {name: "Lee", budget: 25}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public MYMOVIES: Array<Movie> = [];

  constructor() {
    this.MYMOVIES = this. MYMOVIES;
   }

  getUser(){
    return user;
  }

  purchase(price){
    user.budget = user.budget - price;
    return user.budget;
  }


  deletePurchase(price){
    user.budget = user.budget + price;
    return user.budget;
  }

  getMyMovies(): Movie[] {
    return this.MYMOVIES;
  }
  addMyMovies(movie: Movie) {
    this.MYMOVIES.push(movie);
  }

  deleteMyMovie(movie:Movie, idx: number){
    this.MYMOVIES.splice(idx,1);
  }
}
