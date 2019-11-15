import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  token: any;
  constructor(private http: HttpClient) { }

  register(fName: String, lName: String, email: String, password: String) {
    return this.http.post('' + 'auth/register',
      { fName: fName, lName: lName, email: email, password: password }
    )
  }

  loggedUser(val) {
    this.isLoggedIn = val;
  }



  login(email: String, password: String): Observable<any> {
    return this.http.post('' + 'auth/login',
      { email: email, password: password }
    ).pipe(
      tap(token => {
        this.token = token;
        this.isLoggedIn = true;
        return token;
        //   // this.storage.setItem('token', token)
        //   .then((result) => {

        //   }).catch((err) => {

        //   });

        //   // (
        //   // () => {
        //   //   console.log('Token Stored');
      },
        //   // error => console.error('Error storing item', error)
        // )
        //   // this.token = token;
        //   // this.isLoggedIn = true;
        //   // return token;
        // }),
      ))
    // .subscribe(token => {
    //   this.token = token;
    //   this.isLoggedIn = true;
    //   return of(token);
    // })
  }

}
