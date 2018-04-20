import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appcomponent',
  template: '<h1>Hello in the appcomponent</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
