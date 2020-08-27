import { Student } from './../student';
import { RelativesService } from './relatives.service';
import { Relatives } from './../relatives';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';
//import { Student } from '../student';

@Component({
  selector: 'app-relatives',
  templateUrl: './relatives.component.html',
  styleUrls: ['./relatives.component.css']
})
export class RelativesComponent implements OnInit {
  student:Student=new Student();
  //student:Student;
  relativelist:Observable<Relatives[]>;
  lstRelatives:Relatives[];
  relativeFlag = false;
  studentFlag= false;
  marksFlag=false;
  studentId: number;
  number:any;
  //length:any;
  constructor(private relativeService:RelativesService,private router: Router,private activerouter:ActivatedRoute) { }

  ngOnInit() {
    this.activerouter.params.subscribe(params => {
      this.studentId = params['studId'];
      console.log(this.studentId);
      alert(this.studentId);
  });
  this.reloadData();
  }
  reloadData(){
    console.log(this.studentId);
    this.relativelist=this.relativeService.getRelativesList(this.studentId); 
    //alert(this.relativelist);
/*     this.relativeService.getRelativesList()
       .subscribe
    (
      data=>{
        this.lstRelatives=data;
      }
    )
    console.log("we are in getRelativeList"); */
    this.router.navigate(['/relativelist']);  
  } 
  relativeHideShow()
  {
    //let studentid = localStorage.setItem('studentId',studentId);
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
  }
/*   goToRelatives(studentid:number){
    console.log(studentid);  

    //var studentid = localStorage.setItem('studentid',sid);
    this.router.navigate(['/newrelative'],{
      queryParams:{'studentid':studentid}
    });
  } */
  getStudentList(){
    this.router.navigate(['/studentlist']);
  }

  /* addRelatives(){
    let studentid=5;
    let count=0;
    if(this.)
  } */
  goNewRelative(studentid:number){
   // this.studId = studentid;
    
    //alert(studentid);
    this.router.navigate(['/newrelative',studentid]);

  }


 

}
