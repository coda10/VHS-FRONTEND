import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewusersComponent } from './components/viewusers/viewusers.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { DeleteuserComponent } from './components/deleteuser/deleteuser.component';
import { ViewmoviesComponent } from './components/viewmovies/viewmovies.component';
import { CreatemovieComponent } from './components/createmovie/createmovie.component';
import { EditmovieComponent } from './components/editmovie/editmovie.component';
import { DeletemovieComponent } from './components/deletemovie/deletemovie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';



@NgModule({
  declarations: [
    ViewusersComponent,
    CreateuserComponent,
    EdituserComponent,
    DeleteuserComponent,
    ViewmoviesComponent,
    CreatemovieComponent,
    EditmovieComponent,
    DeletemovieComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AdmincomponentsModule { }
