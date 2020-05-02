import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  /**
  * URL API
  */
  apiUrl: string = 'https://api.github.com/users/';
  constructor(private http: HttpClient) { }



    /**
    * searchService
    */
searchService(name): Observable<any> {
  let API_URL = `${this.apiUrl}${name}`;
    return this.http.get(API_URL);

}



// Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
