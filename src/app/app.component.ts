import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <h1>Welcome to {{title}} in {{theYear}}</h1>
          <p>Next year is {{1 + theYear}}</p>

          `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular100-demos';
  isTrue = true;
  theYear: number = 2019;

  constructor() {
    //this.theYear = new Date().getFullYear();
  }

}
