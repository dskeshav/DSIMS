import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';

@NgModule({
    declarations: [
      AppComponent,
      StudentLoginComponent,
      FacultyLoginComponent,
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
    ],
    
    bootstrap: [AppComponent]
  })
  export class AppModule { }