import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoHttpService {

  constructor(private http: HttpClient) { }

  /* myMethod() {
    return console.log("Namaste Sansaar:");
  } */

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }

}
