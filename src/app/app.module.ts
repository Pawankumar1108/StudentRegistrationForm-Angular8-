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


 

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
