import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http'
//import {Course} from '../model/Course';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  course:any
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('/student').subscribe(data=>{
      this.course=data;
    })
  }

}
