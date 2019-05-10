import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: ['.is-inactive {background-color: red}']
})
export class UserCardComponent implements OnInit {

  @Input()
  user: User;

  ngOnInit() { }

}
