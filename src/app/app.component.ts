import { Component, OnInit } from "@angular/core";
import { PeopleService } from "./shared/people.service";
import { Person } from "./shared/models/person.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
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
