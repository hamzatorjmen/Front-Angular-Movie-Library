import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../model/movie.model';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  movie: Movie ;
  id: number;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private data: DataService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => this.id = params.id);
   }

  ngOnInit() {
    
    this.editForm = this.formBuilder.group({
      id:[],
      title: ['', Validators.required],
      director: ['', Validators.required],
      releaseDate: ['', Validators.required],
      type: ['', Validators.required],
    })
    this.data.getMovie(this.id).subscribe(
      data => {
        this.editForm.setValue(data);
      }
    ) 
  }
  onSubmit(){
    this.editForm.value['releaseDate'] = new DatePipe('en-US').transform(this.editForm.value['releaseDate'], 'dd/MM/yyyy');
    this.data.updateMovie(this.editForm.value).subscribe(
      data => this.router.navigate(['movies'])
    )
  }
}
