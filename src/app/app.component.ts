import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
         Check out my favicon...
          `
})
export class AppComponent implements OnInit {
  person: any;

  ngOnInit(): void {
    this.person = {name: 'Fred'};
  }
}

