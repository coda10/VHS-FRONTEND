import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdmindashboardService } from 'src/app/admindashboard.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  backendFeedback: any;
  temp_data: any;
  formError: any = "";

  updateOb: any = localStorage.getItem("updateOb");
  data: any = JSON.parse(this.updateOb);

  constructor(private http: AdmindashboardService, private router: Router) { }

  ngOnInit(): void {
  }

  useredit = new FormGroup({
    username: new FormControl(this.data.username, Validators.required),
    email: new FormControl(this.data.email, [Validators.required, Validators.email])
  });

  updateuser(){
    this.backendFeedback = "";
    this.temp_data = "";

      let x =localStorage.removeItem("updateOb");

      console.log(x);

      console.log(this.useredit.value);
    this.http.updateUser(this.useredit.value.username, this.useredit.value.email, this.data._id).subscribe(data =>{
      //console.log(data);
      this.backendFeedback = data;
    });
  }

}
