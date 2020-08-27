import { MarksService } from './../marks/marks.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Marks } from '../marks';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.css']
})
export class AddMarksComponent implements OnInit {
  marksForm: FormGroup;
  addMarks: Marks = new Marks();
  studId: number;
  studentId: number;
  submitted = false; 
  addMarksFlag=false;

 constructor(private marksService:MarksService,private router:Router,
  private activerouter:ActivatedRoute,private fb: FormBuilder,){} 

  ngOnInit() {
    this.activerouter.params.subscribe(params => {
      this.studentId = params['studId'];
      console.log(this.studentId);
      alert(this.studentId);
  });
  this.marksForm = this.fb.group({
    english: ['', Validators.required]
  })
  }

  get registerFormControl() {
    return this.marksForm.controls;
  }

  save(){
    alert(this.studentId);
  let newstudent1={}
 /*  newstudent1['marks']=[];
  newstudent1['marks'][0]={}; 
  newstudent1['marks'][0]['marathi']=this.addMarks.marathi;
  newstudent1['marks'][0]['totalmarks']="";
  newstudent1['marks'][0]['studentpercentage']="";*/
  //newstudent1['markid'] = this.addMarks.markid;
  newstudent1['english']=this.addMarks.english;
  newstudent1['maths']=this.addMarks.maths;
  newstudent1['science']=this.addMarks.science;
  newstudent1['hindi']=this.addMarks.hindi;
  newstudent1['marathi']=this.addMarks.marathi;
  newstudent1['totalMarks']=""/* this.addMarks.totalMarks */;
  newstudent1['studentPercentage']=""/* this.addMarks.studentPercentage */;
 
  this.marksService.addMarks(newstudent1,this.studentId).subscribe(data => console.log(data),
   error=>console.log(error));
    //this.goToList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
    if (this.marksForm.valid) {
      alert('Form Submitted succesfully!');
      //console.table(this.marksForm.value);
    }
  }
/* 
  goToList(){
    this.router.navigate(['/newmarks']);
  } */
   hideAddMarks(){
     if(this.addMarksFlag == true){
       
     }

   }

}
