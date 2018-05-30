import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../userModel'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
user: User = new User();
  constructor(private userService: UserService) { 
  this.user = this.userService.getUser();
}
  ngOnInit() {
  }

}
