import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/models/person.model';

@Component({
  selector: 'app-people-list',
  template: `
    <div class="container">
      <div class="card-deck">
        <app-person *ngFor="let person of peopleArray" [name]="person"> </app-person>
      </div>
    </div>
  `
})
export class PeopleListComponent implements OnInit {
  peopleArray: Person[];

  ngOnInit() {
    this.peopleArray = [
      {
        name: 'Jane',
        email: 'alias@nbc.com',
        age: 34
      },

      {
        name: 'Seth',
        email: 'meyers@nbc.com',
        age: 44
      },

      {
        name: 'Bob',
        email: 'wysiwyg@bar.com',
        age: 66
      }
    ];
  }

  parentFunctionHandler(name) {
    alert(`You sent ${name} up to list from child`);
  }
}
