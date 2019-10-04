import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
   <h1>Welcome to {{title}}!</h1>
   <h2>A collection of Angular classes and Tests for Demo Purposes</h2>
  `
})
export class AppComponent implements OnInit {

  title = "angular100-demos";
  ngOnInit(): void {

  }


}
