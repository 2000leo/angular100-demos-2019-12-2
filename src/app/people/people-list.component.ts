import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: 'people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  peopleArray: any[];

  ngOnInit() {
    this.peopleArray = ['April', 'May', 'June'];
  }

  parentFunctionHandler(name) {
    alert(`You sent ${name} up to list from child`);
  }

}
