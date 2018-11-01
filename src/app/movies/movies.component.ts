import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service' ;
import { Observable } from 'rxjs' ;
import { Movie } from '../model/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getMovies().subscribe(
      data => this.movies = data
    )
  }

  deleteMovie(movie: Movie){
    this.data.deleteMovie(movie).subscribe(
      data => {
        this.movies = this.movies.filter(m => m !== movie);
      }
    )
  }
  addMovie(){
    this.router.navigate(['add-movie']);
  }
}
