import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// Material Module
import {MatFormFieldModule} from '@angular/material/form-field';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RouterModule } from '@angular/router';
import { TestdashboardComponent } from './testdashboard/testdashboard.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdmindashboardModule } from './admin/admindashboard/admindashboard.module';
import { DashboardComponent } from './admincomponents/components/dashboard/dashboard.component';
import { ViewusersComponent } from './admincomponents/components/viewusers/viewusers.component';
import { CreateuserComponent } from './admincomponents/components/createuser/createuser.component';
import { EdituserComponent } from './admincomponents/components/edituser/edituser.component';
import { DeleteuserComponent } from './admincomponents/components/deleteuser/deleteuser.component';
import { ViewmoviesComponent } from './admincomponents/components/viewmovies/viewmovies.component';
import { DeletemovieComponent } from './admincomponents/components/deletemovie/deletemovie.component';
import { CreatemovieComponent } from './admincomponents/components/createmovie/createmovie.component';
import { EditmovieComponent } from './admincomponents/components/editmovie/editmovie.component';
import { EditComponent } from './admincomponents/components/edit/edit.component';
import { UsersideComponent } from './userside/userside.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminregistrationComponent,
    LandingpageComponent,
    TestdashboardComponent,
    //DashboardComponent,
    //AdmindashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //Material Modules
    MatFormFieldModule,

    //Routes
    RouterModule.forRoot([
      //{path: "", component: LandingpageComponent},
      {path: "", component: UsersideComponent},
      {path: "admin/login", component: AdminloginComponent},
      {path: "admin/registration", component: AdminregistrationComponent},
      {path: "admin", component: AdminloginComponent},
      {path: "testdashboard", component: TestdashboardComponent},
      {path: "admindashboard", 
      component: AdmindashboardComponent,
      children: [
        {path: "", component: DashboardComponent},
        {path: "dashboard", component: DashboardComponent},
        {path: "viewusers", component: ViewusersComponent},
        {path: "createuser", component: CreateuserComponent},
        // {path: "edituser", component: EdituserComponent},
        {path: "edit", component: EditComponent},
        {path: "deleteuser", component: DeleteuserComponent},
        {path: "viewmovies", component: ViewmoviesComponent},
        {path: "createmovie", component: CreatemovieComponent},
        {path: "editmovie", component: EditmovieComponent},
        {path: "deletemovie", component: DeletemovieComponent},
        // {path: "logout", component: AdminloginComponent}
      ]}
    ]),
    AdmindashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
