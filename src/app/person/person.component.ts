import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
    <div class="card" style="width: 200px;height: 300px;">
      <div class="card-body">
        <h4 class="card-title text-center">{{name}}</h4>
      </div>
    </div>
  `
})
export class PersonComponent implements OnInit {
  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
