import { Router } from '@angular/router';
import { StudentService } from './../student.service';
import { HttpClient } from '@angular/common/http';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

   student: Student = new Student();
   submitted = false; 

  constructor(private studentService:StudentService,private router:Router){}

  ngOnInit(): void {
}

   newStudent():void{
     this.submitted;
     this.student = new Student();
    }

    save(){
      this.studentService.createNewStudent(this.student).subscribe(data => console.log(data),
       error=>console.log(error));
       this.student=new Student();
       this.goToList();
      }

      onSubmit(){
        this.submitted = true;
        this.save;
      }

      goToList(){
        this.router.navigate(['/newstudent']);
      }

}
