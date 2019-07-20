import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, tap } from "rxjs/operators";
import { PeopleService } from "../shared/people.service";

@Component({
  selector: "app-person-detail",
  templateUrl: "./person-detail.component.html",
  styleUrls: ["./person-detail.component.css"]
})
export class PersonDetailComponent implements OnInit {
  // id: number;
  constructor(private route: ActivatedRoute, private api: PeopleService) {
    this.route.params
      .pipe(
        map(params => params["id"]),
        tap(id => console.log("id", id))
      )
      .subscribe(id => api.getPerson(id));
  }

  ngOnInit() { }
}
