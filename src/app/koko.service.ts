import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import  { userData }  from './userdata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KokoService {

  constructor(private http: HttpClient) { }

  kokoUrl = "https://hacker-news.firebaseio.com/v0/item/160705.json?print=pretty";



  getUserData() : Observable<userData[]>{
    return this.http.get<userData[]>(this.kokoUrl);
  }

}
