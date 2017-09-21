import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class MyRequestsService {

  constructor(private http:Http) { }
  getRequest(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos/')
      .map(res=>res.json())
  }
}
