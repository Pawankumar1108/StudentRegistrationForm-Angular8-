import { Router } from '@angular/router';
import { StudentService } from './../student.service';
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

  ngOnInit() {
  /*   this.onSubmit();
    this.save();
    this.newStudent(); 
    this.displll(); */
    //this.goToList();
}

displll(){
  console.log("helloo i'm here in the add-component ");
  console.log("data is : \n"+this.student)
}

newStudent():void{
     this.submitted = false;
     this.student = new Student();
    }

    save(){
      this.displll();
      var newstudent1={}
      newstudent1['studentid'] = this.student.studentid;
      newstudent1['studentName'] = this.student.studentName;
      newstudent1['studentdob'] = this.student.studentdob;
      newstudent1['studentContactNumber'] = this.student.studentContactNumber;
      newstudent1['studentAddress'] = this.student.studentAddress;
      
     /*  newstudent1['relatives']=[];
      newstudent1['relatives'][0] = {};
     // newstudent1['relativeId'] = this.student.relativeId;
      newstudent1['relatives'][0]['name']=this.student.name;
      newstudent1['relatives'][0]['relation']=this.student.relation;
      newstudent1['relatives'][0]['address']=this.student.address;
      newstudent1['relatives'][0]['contactNumber']=this.student.contactNumber; */
      /* newstudent1['marks']=[];
      newstudent1['marks'][0]={};
      //newstudent1['markid'] = this.student.markid;
      newstudent1['marks'][0]['english']=this.student.english;
      newstudent1['marks'][0]['maths']=this.student.maths;
      newstudent1['marks'][0]['science']=this.student.science;
      newstudent1['marks'][0]['hindi']=this.student.hindi;
      newstudent1['marks'][0]['marathi']=this.student.marathi;
      newstudent1['marks'][0]['totalmarks']="";
      newstudent1['marks'][0]['studentpercentage']=""; */
      this.studentService.createNewStudent(newstudent1).subscribe(data => console.log(data),
       error=>console.log(error));
        this.goToList();
      }

      onSubmit(){
        this.submitted = true;
        this.save();
      }

      goToList(){
        this.router.navigate(['/studentlist']);
      }

/*     /*   function studentValidation()                                    
{ 
    var studentName = document.forms["RegForm"]["studentName"];               
    var studentdob = document.forms["RegForm"]["studentdob"];    
    var studentContactNumber = document.forms["RegForm"]["studentContactNumber"];  
    var studentAddress =  document.forms["RegForm"]["studentAddress"];  
    var name = document.forms["RegForm"]["name"];  
    var relation = document.forms["RegForm"]["relation"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        studentName.focus(); 
        return false; 
    } 
   
    if (studentAddress.value == "")                               
    { 
        window.alert("Please enter your address."); 
        studentAddress.focus(); 
        return false; 
    } 
       
    if (studentdob.value == "")                                   
    { 
        window.alert("Please enter a valid studentdob."); 
        studentdob.focus(); 
        return false; 
    } 
   
    if (studentContactNumber.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        studentContactNumber.focus(); 
        return false; 
    } 
   
    if (name.value == "")                        
    { 
        window.alert("Please enter your Relative name"); 
        name.focus(); 
        return false; 
    } 
   
    if (relation.relation < 1)                  
    { 
        alert("Please enter your Relative relation."); 
        relation.focus(); 
        return false; 
    } 
   
    return true; 
} */
}
