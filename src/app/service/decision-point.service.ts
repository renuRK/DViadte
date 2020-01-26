import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DecisionPointService {

  constructor(private http:HttpClient) { }
  url="https://jsonplaceholder.typicode.com/users";
  url1="https://jsonplaceholder.typicode.com/posts"
  getUserDetails()
    {
      return this.http.get(this.url)
    }
  getsSpecificUserDetails(id:number){
    return this.http.get(this.url1 +`?userId=${id}`)
  }
}
