import { Student } from './student';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }


  getStudentList():Observable<any>{
   /*  let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    ); */ 
    return this.http.get<any>(`http://localhost:8080/home/studentlist`);

  }
    createNewStudent(student:any):Observable<any>{    
      
        // const headers = { 'content-type': 'application/json'}  
        const headers = ({ 'content-type': 'application/json' });  
        const body=JSON.stringify(student);
        //const body = JSON.stringify({"abc":"1234"});
     return this.http.post('http://localhost:8080/home/newstudent',body,{'headers':headers})/* .map((res: Response) => res.json()) */;
   }


/*   addMarks(markslist:any):Observable<any>{

    const headers = ({ 'content-type': 'application/json' }); 
    let params=new HttpParams().set('studentid','studentid'); 
    const body=JSON.stringify(markslist);
    //var studentid = localStorage.getItem('studentid');


    return this.http.post('http://localhost:8080/home/newmarks',body,{params:headers } );

   } */

/*  getRelativesList():Observable<any>{
    let params1=new HttpParams().set('studentid','1');
     console.log(params1);
    return this.http.get<any>('http://localhost:8080/home/relativelist',{params:params1});
    } */ 
  
 /*  getMarksList():Observable<any>{
    let params1=new HttpParams().set('studentid','1');
    console.log(params1);
    return this.http.get<any>('http://localhost:8080/home/markslist?',{params:params1});
  } */

}

