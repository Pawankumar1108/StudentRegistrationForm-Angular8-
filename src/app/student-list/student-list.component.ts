import { HttpParams } from '@angular/common/http';
import { MarksService } from './../marks/marks.service';
import { RelativesService } from './../relatives/relatives.service';
import { Relatives } from './../relatives';

import { Observable } from 'rxjs';
import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { Marks } from '../marks';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student:Observable<Student[]>;
  relativelist:Observable<Relatives[]>;
  markslist:Observable<Marks[]>;
  lstRelatives:Relatives[];
  lstMarks:Marks[];
  relativeFlag = false;
  studentFlag= true;
  marksFlag=false;
  studId: number;

  constructor(private studentService:StudentService,private router: Router,
              private relativeService:RelativesService,private marksService: MarksService,
              private activeRouter:ActivatedRoute) { }

  ngOnInit(): void{
     this.reloadData();
  } 

  reloadData(){
    this.student=this.studentService.getStudentList();
    
  }   

  relativeHideShow()
  {
    //alert(studentid)
    //console.log(studentid);
    if(this.relativeFlag == true)
    {
      this.relativeFlag = false;
      this.studentFlag= true;
      this.marksFlag=false;
    } 
    else
    {
      this.studentFlag= false;
      this.relativeFlag = true;
      this.marksFlag=false;
    }

    console.log("Runing Successfully 'Relatives");
  }
 
  marksHideShow(){
    if(this.marksFlag == true){
      this.marksFlag=false;
      this.relativeFlag = false;
      this.studentFlag= true;
      
    }
    else
    {
      this.studentFlag= false;
      this.relativeFlag = false;
      this.marksFlag=true;
    
    }

    console.log("Runing Successfully 'Marks");  
    
  }
/*   goToAddMarks(studentid:number){
    console.log(studentid);
    this.router.navigate(['/newmarks']);
  } */

  goToMarksList( studentid:number){
     alert(studentid);
     this.studId = studentid;
     console.log(studentid);
     console.log("In Marks List");
     // this.router.navigate(['/markslist'],{queryParams:{'studentid': this.studId}});
     this.router.navigate(['/markslist',this.studId]);
  }


  goToRelativeList(studentid: number){
    //alert(studentid);
    this.studId = studentid;
    console.log(studentid); 
    console.log("In Relative List");
    // this.router.navigate(['/relativelist'],{queryParams:{'studentid': this.studId}});
    this.router.navigate(['/relativelist',this.studId]);
  }
 
/*     this.marksService.getMarksList().subscribe
    (
      data=>{
        this.lstMarks=data;
      }
    ) 
    console.log("In Marks List");
    this.router.navigate(['/markslist'],{
      queryParams:{'studentid':studentid}
    });
    this.student=this.studentService.getStudentList(); */

/*   goToRelatives(studentid:number){
    console.log(studentid);  

    //var studentid = localStorage.setItem('studentid',sid);
    this.router.navigate(['/newrelative']);
  } */

 
}
