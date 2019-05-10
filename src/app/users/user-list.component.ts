import { Component, OnInit } from '@angular/core';
import { User } from './user';

const userdata = require('../data/users.json');

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {
  userArray: User[];
  showCard = true;

  ngOnInit() {
    this.userArray = userdata.users;
  }

  parentFunctionHandler(name) {
    alert(`You sent ${name} up to list from child`);
  }

}
