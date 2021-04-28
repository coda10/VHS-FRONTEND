import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

   BAKEND_URL = 'https://vhsbackend.herokuapp.com';
   //BAKEND_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  //View Users
  viewUsers(){
    return this.http.get(`${this.BAKEND_URL}/admin/allusers`)
  }
  //Create User
  createUser(data: any){
    return this.http.post(`${this.BAKEND_URL}/admin/createuser`, data);
  }

  //updateUser
  updateUser(username: any, email: any, userid: string){
    return this.http.patch(`${this.BAKEND_URL}/admin/edituser/${userid}`, {username, email});
  }

  //Delete User
  deleteUser(userid: any){
    return this.http.get(`${this.BAKEND_URL}/admin/deleteuser/${userid}`);
  }

  //create Movie
  createMovie(data: any){
    return this.http.post(`${this.BAKEND_URL}/admin/createmovie`, data);
    // return this.http.post(`${this.BAKEND_URL}/admin/createmovie`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
  }
}
