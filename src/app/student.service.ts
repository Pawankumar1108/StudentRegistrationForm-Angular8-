import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }


  getStudentList():Observable<any>{
    return this.http.get<any>(`http://localhost:8080/home/studentlist`);

  }
    createNewStudent(student:Object):Observable<Object>{
     return this.http.post(`http://localhost:8080/home/newstudent`,student);
   }

   getStudentDetails(studentName:string): Observable<any> {
    return this.http.get(`{http://localhost:8080/home/studentlist}/${studentName}`);
  }
}
