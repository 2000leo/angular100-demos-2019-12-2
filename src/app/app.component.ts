import { Component, OnInit } from "@angular/core";
import { PeopleService } from "./shared/people.service";
import { Person } from "./shared/models/person.model";
import { Observable, interval } from "rxjs";
import { map, filter, take } from "rxjs/operators";

@Component({
  selector: "app-root",
  template: `
    <div>
      <p>Observables & RxJS Example</p>
      <p>(Please check the console)</p>
    </div>
  `
})
export class AppComponent implements OnInit {
  people$: Observable<Person[]>;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    interval(1000)
      .pipe(
        take(3),
        map(v => Date.now())
      )
      .subscribe(value => console.log("Subscriber: " + value));

    /*
const middleware = pipe(
  take(3),
  map(v => Date.now())
);

interval(1000)
  .pipe(middleware)
  .subscribe(value => console.log("Subscriber: " + value));
  */
  }
}
