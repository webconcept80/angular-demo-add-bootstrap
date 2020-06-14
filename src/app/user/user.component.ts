import { UserService } from './../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((user) => {
      this.users = user;
    });
  }
}
