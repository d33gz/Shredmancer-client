import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Tab } from './Tab';
import { Song } from './Song';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:1890'
  
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllSongs(): Observable<Song> {
    return this.http
    .get<Song>(this.apiURL + '/songs/')
    .pipe(retry(1), catchError(this.handleError));
  }

  getAllTabs(): Observable<Tab> {
    return this.http
    .get<Tab>(this.apiURL + '/tabs/')
    .pipe(retry(1), catchError(this.handleError));
  }

  getOneTab(id: any): Observable<Tab[]> {
    return this.http
    .get<Tab[]>(this.apiURL + '/tabs/' + id)
    .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
