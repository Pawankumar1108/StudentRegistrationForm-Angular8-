import { Marks } from './../marks';
import { Observable } from 'rxjs';
import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student:Observable<Student[]>;
 

  constructor(private studentService:StudentService,private router: Router) { }

  ngOnInit(): void{
     this.reloadData();
     
  } 

  reloadData(){
    this.student=this.studentService.getStudentList();
  }

  studentDetails(studentName:string){
    this.router.navigate(['details',studentName]); 
  }
  
}
