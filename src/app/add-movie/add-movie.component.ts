import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private fromBuilder: FormBuilder, private router: Router, private data: DataService) { }

  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.fromBuilder.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      releaseDate: ['', Validators.required],
      type: ['', Validators.required],
    })
  }

  onSubmit(){
    this.addForm.value['releaseDate'] = new DatePipe('en-US').transform(this.addForm.value['releaseDate'], 'dd/MM/yyyy');
    this.data.addMovie(this.addForm.value).subscribe(
      data => this.router.navigate(['movies'])
    )
  }

}
