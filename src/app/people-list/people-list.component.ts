import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = "Hard Coded People List title"
  }

}
