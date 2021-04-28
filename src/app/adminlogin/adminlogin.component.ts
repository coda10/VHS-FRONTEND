import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  serverFeedBack: any = "";
  adminData: any;

  loginForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  login(loginForm: any){
    console.log(loginForm.value);
    //login
    this.http.loginAdmin(loginForm.value).subscribe(data =>{ 
      this.serverFeedBack = data;

      if(this.serverFeedBack.message === 'Login Successful!'){
       
        this.adminData = {
          adminname: this.serverFeedBack
        };

        localStorage.setItem('adminData', JSON.stringify(this.adminData));
        this.router.navigate(['admindashboard']);
      }
    });
    //console.log(HttpErrorResponse.);
    
    // if(this.serverFeedBack.message === 'Login Successful!'){
    //   this.router.navigate(['testdashboard']);
    // }
  }

  constructor(private http: AdminauthService, private router: Router) { }

  ngOnInit(): void {
  }

}
