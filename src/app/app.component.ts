import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Is {{ somePerson?.name }} here?</p>
  `,
})
export class AppComponent {
  somePerson: any;
}



// constructor() {
//   // this.somePerson = { name: "Don" };
//  }
