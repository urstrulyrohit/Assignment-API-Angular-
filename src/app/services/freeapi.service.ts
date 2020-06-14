import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private httpclient: HttpClient) { }
  getusers(): Observable<any>{
    // tslint:disable-next-line: comment-format
    return this.httpclient.get('https://jsonplaceholder.typicode.com/users');
  }
  getposts(): Observable<any>{
    // tslint:disable-next-line: comment-format
    return this.httpclient.get('https://jsonplaceholder.typicode.com/posts');
  }
  gettodos(): Observable<any>{
    return this.httpclient.get('https://jsonplaceholder.typicode.com/todos'); 
  }
  getcomments(): Observable<any>{
    return this.httpclient.get('https://jsonplaceholder.typicode.com/comments'); 
  }
}
