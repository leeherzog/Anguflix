import { Injectable } from '@angular/core';
import {User} from './userModel'

const user: User = {name: "Lee", budget: 10}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

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
}
