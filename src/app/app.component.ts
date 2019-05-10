import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <p [hidden]="isHidden">Is it hidden?</p>
          <img [src]="'assets/favicon.png'" />
          `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isHidden: boolean;

  ngOnInit(): void {
    this.isHidden = false;

    setInterval(() => { this.isHidden = !this.isHidden; }, 1000);
  }
}

