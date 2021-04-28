import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  receivedAdminData: any = localStorage.getItem('adminData');
  adminData: any = JSON.parse(this.receivedAdminData);

  constructor() { }

  ngOnInit(): void {
  }

}
