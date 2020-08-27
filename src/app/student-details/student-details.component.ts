
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {


   studentname:string;
   student: Student;

  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: StudentService) { }

  ngOnInit() {
   /*  this.student = new Student();

    this.studentname = this.route.snapshot.params['studentname'];
    
    this.studentService.getStudentDetails(this.studentname)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error)); */
  }

  list(){
    this.router.navigate(['studentlist']);
  }
}


