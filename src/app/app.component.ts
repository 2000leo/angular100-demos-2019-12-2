import { Component, OnInit } from "@angular/core";
import { PeopleService } from "./shared/people.service";

@Component({
  selector: "app-root",
  template: `
    Check logs
  `
})
export class AppComponent implements OnInit {
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
