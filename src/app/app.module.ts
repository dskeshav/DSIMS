import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  {
    path:'faculty',
    component:FacultyLoginComponent,
    data:{title:'faculty'}
  },
  {
    path: '',
    component: StudentLoginComponent,
    data: { title: 'student' }
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    data:{title:'dashboard'}
  },
  {
    path:'register',
    component:RegisterComponent,
    data:{title:'registerCourse'}
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    FacultyLoginComponent,
    DashboardComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }