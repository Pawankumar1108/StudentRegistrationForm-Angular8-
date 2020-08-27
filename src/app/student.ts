export class Student {

    constructor(){
        //console.log(this.student);
    }

    studentid:number
    studentName:string;
    studentdob:string;
    studentContactNumber:string;
    studentAddress:string;
    
    //relative Entity
      relativeId:number;
    name:string;
    relation:string;
    address:string;
    contactNumber:number;

   
    //Student Marks
    markid:number;
    english:number;
    maths:number;
    science:number;
    hindi:number;
    marathi:number;
    totalmarks:number;
    studentpercentage:number; 

 
}