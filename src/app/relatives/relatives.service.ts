import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { Relatives } from '../relatives';

@Injectable({
  providedIn: 'root'
})
export class RelativesService {

  constructor(private http:HttpClient) { }

  addRelatives(relativeslist:any,studentId:any):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const params = new HttpParams()
       .set('studentid', studentId)  
     const body=JSON.stringify(relativeslist);
     console.log(params); 

    return this.http.post('http://localhost:8080/home/newrelative',body,{'headers':headers,'params':params});
 
  }

  getRelativesList(studId:number):Observable<any>{
    let params1=new HttpParams().set('studentid',studId.toString());
    // console.log(params1);
    // let cparams = new URLSearchParams();
    // cparams.set('studentid',studId.toString());
   return this.http.get<any>('http://localhost:8080/home/relativelist',{params:params1});
 }

/*  addRelatives(relativeslist:Relatives):Observable<any>{

  /*    const headers = ({ 'content-type': 'application/json' }); 
     const options = {
       headers: new HttpHeaders().append("studentid", '2'),
       params: new HttpParams().append("studentid", '2')
     } 
     const body=JSON.stringify(relativeslist);
 
     return this.http.post('http://localhost:8080/home/newrelative',body,options); */
  
   /*   const headers = new HttpHeaders()
     headers.set('content-type','application/json')
     headers.set('Access-Control-Allow-Origin', '*');
     headers.set("studentid", '1');
     var studentId = localStorage.getItem('studentId');
     console.log(headers)  */
 /* let headers = new HttpHeaders()
  
 headers=headers.append('content-type','application/json')
 headers=headers.append('Access-Control-Allow-Origin', '*')
 headers=headers.append('content-type','application/x-www-form-urlencoded')
  
 console.log(headers) 
 
    
 
     return this.http.post('http://localhost:8080/home/newrelative',{'headers':headers});
  
   } */

}
