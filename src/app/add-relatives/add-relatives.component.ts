import { RelativesService } from './../relatives/relatives.service';
import { Relatives } from './../relatives';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-relatives',
  templateUrl: './add-relatives.component.html',
  styleUrls: ['./add-relatives.component.css']
})
export class AddRelativesComponent implements OnInit {
  addRelatives: Relatives = new Relatives();
  studId: number;
  studentId: number;
   submitted = false; 

   
  constructor(private relativeService:RelativesService,private router:Router,private activerouter:ActivatedRoute) { }

  ngOnInit() {
    this.activerouter.params.subscribe(params => {
      this.studentId = params['studId'];
      console.log(this.studentId);
      // alert(this.studentId);
  });
  }

  save(){
    alert(this.studentId);
   let newstudent1={}
     // newstudent1['relatives']=[];
     // newstudent1['relatives'][0] = {};
      //newstudent1['relativeId'] = this.addRelatives.relativeId;
      newstudent1['name']=this.addRelatives.name;
      newstudent1['relation']=this.addRelatives.relation;
      newstudent1['address']=this.addRelatives.address; 
      newstudent1['contactNumber']=this.addRelatives.contactNumber;
     
      this.relativeService.addRelatives(newstudent1,this.studentId).subscribe(data => console.log(data),
      error=>console.log(error));
       //this.goToList();
  
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }

 /*  goToList(){
    this.router.navigate(['/newrelative']);
  } */


}
