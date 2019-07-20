import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users/user.service';
import { User } from '../users/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User;

  constructor(private activatedRoute: ActivatedRoute, private service: UserService) {
    const id = +this.activatedRoute.parent.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getUser(id).subscribe((user) => this.user = user);
  }

  ngOnInit() {
  }

}
