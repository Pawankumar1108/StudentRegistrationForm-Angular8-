import { RelativesService } from './relatives/relatives.service';
import { MarksService } from './marks/marks.service';
import { AuthenticationService } from './authentication.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { StudentService } from './student.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { RelativesComponent } from './relatives/relatives.component';
import { MarksComponent } from './marks/marks.component';
import { AddRelativesComponent } from './add-relatives/add-relatives.component';
import { AddMarksComponent } from './add-marks/add-marks.component';




 

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    RelativesComponent,
    MarksComponent,
    AddRelativesComponent,
    AddMarksComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService,
    AuthenticationService,
    MarksService,
    RelativesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
