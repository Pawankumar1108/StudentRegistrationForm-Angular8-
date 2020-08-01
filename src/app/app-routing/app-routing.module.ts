import { AddStudentComponent } from './../add-student/add-student.component';
import { StudentListComponent } from './../student-list/student-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
   path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'studentlist',component:StudentListComponent
  },
  {
    path:'details/:studentname',component:StudentListComponent
  },
  {
    path:'newstudent',component:AddStudentComponent
  }
 
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
