import { Component, OnInit } from "@angular/core";
import { PeopleService } from "./shared/people.service";
import { Person } from "./shared/models/person.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-people-list",
  template: `
    <ul>
      <li *ngFor="let person of people">
        {{ person.first_name }}
      </li>
    </ul>
  `
})
export class PeopleListComponent implements OnInit {
  people: Person[];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(
      (data: Person[]) => {
        this.people = data;
      },
      error => console.log("error occured", error)
    );
  }
}
