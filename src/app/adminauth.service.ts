import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

   BAKEND_URL = 'https://vhsbackend.herokuapp.com';
   //BAKEND_URL = 'http://localhost:3000';

  registerAdmin(data: any){
    return this.http.post(`${this.BAKEND_URL}/auth/admin/registration`, data);
  }

  loginAdmin(data: any){
    return this.http.post(`${this.BAKEND_URL}/auth/admin/login`, data);
  }

  constructor(private http: HttpClient) { }
}
