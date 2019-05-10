import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <p [hidden]="isTrue">Is it hidden?</p>
          <img [src]="'assets/favicon.png'" />
          `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isTrue = false;
  theYear: number = 2019;

}

