import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.css']
})
export class FacultyLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login() {
    const url = location.host.split(':');
    const domain = url[0];
    window.location.href = 'http://' + domain + ':4200/dashboard';
  }
}
