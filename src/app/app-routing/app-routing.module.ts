import { RelativesComponent } from './../relatives/relatives.component';
import { AddRelativesComponent } from './../add-relatives/add-relatives.component';
import { AddStudentComponent } from './../add-student/add-student.component';
import { StudentListComponent } from './../student-list/student-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { MarksComponent } from '../marks/marks.component';
import { AddMarksComponent } from '../add-marks/add-marks.component';


const routes: Routes = [
  { path:'',redirectTo:'',pathMatch:'full' },
  { path:'studentlist',component:StudentListComponent },
  { path:'login',component:LoginComponent },
  { path:'logout',component:LogoutComponent },
  { path:'newstudent',component:AddStudentComponent },
  { path:'newrelative/:studId',component:AddRelativesComponent },
  { path:'relativelist/:studId',component:RelativesComponent },
  { path:'newmarks/:studId',component:AddMarksComponent },
  { path:'markslist/:studId',component:MarksComponent },

];

@NgModule({
  declarations: [],


exports: [
  RouterModule
    
],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
