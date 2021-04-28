import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdmindashboardService } from 'src/app/admindashboard.service';

@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.css']
})
export class CreatemovieComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: AdmindashboardService) { }

  ngOnInit(): void {
  }

  @ViewChild('moviefile', { static: false })
  moviefile!: ElementRef;

  movie: any = this.fb.group({
    movietitle: [null, Validators.required],
    moviegenre: [null, Validators.required],
    moviecostperday: [null, Validators.required],
    moviefile:['']
  });

  createMovie(){
    const imageB = this.moviefile.nativeElement.files[0];
    console.log(imageB);
    //
    const formData:any = new FormData;
    //formData.set('movieData', this.movie.value);
    //this.movie.setValue({file:imageB});
    //this.movie.updateValueAndValidity()
    //formData.set('movieData', this.movie.setValue());
    //formData.set('movieData', this.movie.setValue(imageB));
    //formData.set('file', imageB);
    //formData.set('movieData', this.movie.get('movietitle').value);
     formData.set('file', 'tyftufu');
    //this.movie.
    console.log(formData);

    this.http.createMovie(formData).subscribe(result =>{
    // this.http.createMovie({data: this.movie.value, imageB}).subscribe(result =>{
      console.log(result);
      
    });
    
  }

}
