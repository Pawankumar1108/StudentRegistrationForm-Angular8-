import { Observable } from 'rxjs';
import { HttpClient,HttpParams ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  constructor(private http:HttpClient) { }
  
  addMarks(markslist:any,studentId:any):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const params = new HttpParams()
       .set('studentid', studentId)
     const body=JSON.stringify(markslist);
     console.log(params); 
    return this.http.post('http://localhost:8080/home/newmarks',body,{'headers':headers,'params':params});
  }

  getMarksList(studId:number):Observable<any>{
    let params1=new HttpParams().set('studentid',studId.toString());
    console.log(params1);
    return this.http.get<any>('http://localhost:8080/home/markslist',{params:params1});
  }


}
