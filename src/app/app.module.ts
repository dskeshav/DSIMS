import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'

import { StudentLoginComponent } from './student-login/student-login.component';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: StudentLoginComponent,
    data: { title: 'student' }
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    data:{title:'dashboard'}
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    FacultyLoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }