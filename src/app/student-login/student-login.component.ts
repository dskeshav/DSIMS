import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  USN: string;
  Password: String;
  constructor() { }

  ngOnInit() {
  }
  login() {
    const url = location.host.split(':');
    const domain = url[0];
    window.location.href = 'http://' + domain + ':4200/dashboard';
  }
}
