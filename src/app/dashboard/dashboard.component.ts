import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
logOut(){
  const url=location.host.split(':');
  const domain=url[0];
  window.location.href="http://"+domain+":4200/"
}
}
