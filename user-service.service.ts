import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
 
  constructor(private http: HttpClient) {}

  viewAllUsers() {
    let token = sessionStorage.getItem('token');

    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get('http://localhost:9090/user/all', { headers });
  }
  
}
