import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/auth/';

// const httpOptions = {
//   headers: new HttpHeaders({'Access-Control-Allow-Headers': 'Content-Type',
//     'Access-Control-Allow-Methods': 'POST','Access-Control-Allow-Origin': '*'})
// };

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(credentials: any): Observable<any> {
//        const headers = new Headers();
//        headers.append('Access-Control-Allow-Headers', 'Content-Type');
//        headers.append('Access-Control-Allow-Methods', 'POST');
//        headers.append('Access-Control-Allow-Origin', '*');

       return this.http.post(AUTH_API + 'signin', {
         username: credentials.username,
         password: credentials.password
       }, httpOptions);
     }

  register(user: any): Observable<any> {

//   const headers = new Headers();
//        headers.append('Access-Control-Allow-Headers', 'Content-Type');
//        headers.append('Access-Control-Allow-Methods', 'POST');
//        headers.append('Access-Control-Allow-Origin', '*');

     return this.http.post(AUTH_API + 'signup', {
       username: user.username,
       email: user.email,
       password: user.password
     },httpOptions);
   }
}
