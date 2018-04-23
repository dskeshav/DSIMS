import { Component, OnInit } from '@angular/core';
import {Course} from '../../../models/Course'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  course:Course[]
  constructor() { }

  ngOnInit() {
  }

}
