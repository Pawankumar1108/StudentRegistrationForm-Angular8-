import { MarksService } from './marks.service';
import { Marks } from './../marks';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  
  markslist:Observable<Marks[]>;
  //lstMarks:Marks[];

  constructor(private marksService:MarksService,private router: Router,private activerouter:ActivatedRoute) { }

  relativeFlag = false;
  studentFlag= false;
  marksFlag=false;
  studentId: number;
  studentName:string;
  ngOnInit() {
    this.activerouter.params.subscribe(params => {
      this.studentId = params['studId'],['studentName'];
      console.log(this.studentId);
      alert(this.studentId);
  });
    this.reloadData();  
  }

  reloadData(){
    console.log(this.studentId);
    this.markslist=this.marksService.getMarksList(this.studentId); 
    //alert(this.markslist);
    this.router.navigate(['/markslist']);
   // this.markslist=this.marksService.getMarksList();
/*     this.marksService.getMarksList().subscribe
    (
      data=>{
        this.lstMarks=data;
      }
    )
    console.log("In Marks List");
    this.router.navigate(['/markslist']); */
    
  } 

/*   relativeHideShow()
  {
    if(this.relativeFlag == true)
    {
      this.relativeFlag = false;
      this.studentFlag= true;
      
    } 
    else
    {
      this.studentFlag= false;
      this.relativeFlag = true;
      
    }
  } */

  marksHideShow(){
    //let studentid = localStorage.setItem('studentId',sid);
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
  }

  getStudentList(){
    this.router.navigate(['/studentlist']);
  }
  goToAddMarks(studentid:number){
    alert(studentid);
    console.log("inside the Add Marks "+studentid);
  /*   this.router.navigate(['/newmarks'],{
      queryParams:{'studentid':studentid}
    }); */
    this.router.navigate(['/newmarks',studentid]);
    //let studentid = localStorage.setItem('studentid',sid);
   /*  http://localhost:8080/home/newmarks */
  }

   goToMarks(studentid:number){
    
    alert(studentid);
    console.log("Inside New Add Marks Method--"+studentid);
    this.router.navigate(['/newmarks',studentid]);

   }

}
