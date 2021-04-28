import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AdminauthService } from "../adminauth.service";

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {
  
  //Define Form
  registrationForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    comfirmPassword: new FormControl('', Validators.required)
  });

   serverFeedBack: any;
   passwordDoesnotMatch: any;
   
  //Register
  register(registrationForm: any){
    this.serverFeedBack = '';
    this.passwordDoesnotMatch = false;

    console.log(registrationForm.value);
    
    if(registrationForm.value.password === registrationForm.value.comfirmPassword){
    //Register
     this.http.registerAdmin({
      username: registrationForm.value.username,
      email: registrationForm.value.email,
      password: registrationForm.value.password
    }).subscribe(data => this.serverFeedBack = data);
   }else{
     this.passwordDoesnotMatch = true;
   }
   //If error code is 404
  }

  //Validations

  constructor(private http: AdminauthService) { }

  ngOnInit(): void {
  }

}
