import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdmindashboardService } from 'src/app/admindashboard.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  
  //Create Form
  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  //Validation
  get username(){return this.userForm.get('username')}
  get email(){return this.userForm.get('email')}
  get password(){return this.userForm.get('password')}
  get confirmPassword(){return this.userForm.get('confirmPassword')}

  backendFeedback: any;
  passwordMatch : any;

  constructor(private http: AdmindashboardService) { }

  ngOnInit(): void {
  }

  //Create User
  createuser(userForm: any){
    this.passwordMatch = false;
    this.backendFeedback = "";
    //console.log(userForm.value);

    if(userForm.value.password !== userForm.value.confirmPassword){
      this.passwordMatch = true;
    }else{
      this.http.createUser({
        username: userForm.value.username,
        email: userForm.value.email,
        password: userForm.value.password
      }).subscribe(data =>{
        this.backendFeedback = data;
      });
    }
  }

}
