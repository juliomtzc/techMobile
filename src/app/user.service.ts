import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {  throwError } from 'rxjs';
import { retry, catchError } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserService {
 private SERVER_URL  = 'http://localhost:3000/user';


  constructor( private httpClient: HttpClient) {}

  //Local Functions
  handleError(error: HttpErrorResponse) {
   let errorMessage = 'Unknow Error!';
   if (error.error instanceof  ErrorEvent){
     errorMessage = `Error: ${error.error.message} `;
   } else {
     errorMessage = `Error: ${error.status} \nMessage: ${error.message}`;
   }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  public get() {
    return this.httpClient.get(this.SERVER_URL,{withCredentials: true}).pipe(catchError(this.handleError));
  }

}
