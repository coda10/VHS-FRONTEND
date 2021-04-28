import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmindashboardService } from 'src/app/admindashboard.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

  serverResponse: any = "";
  deleteresponse: any = "";

  constructor(private http: AdmindashboardService, private router: Router) { }

  ngOnInit(): void {
    this.allUsers();
  }

  allUsers(){
    this.http.viewUsers().subscribe(data =>{
      this.serverResponse = data;
      console.log(this.serverResponse);
    });
  }

  editUser(data_id: any, data_username: any, data_email: any){
    const updateOb: any = {
      _id: data_id,
      username: data_username,
      email: data_email
    };
    localStorage.setItem('updateOb', JSON.stringify(updateOb));
    this.router.navigate(['admindashboard/edit']);
  }

  deleteuser(data_id: any){
    this.http.deleteUser(data_id).subscribe(data =>{
      this.deleteresponse = data;
      if(this.deleteresponse.message){
        this.allUsers();
      }
    });
  }

}
