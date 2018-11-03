import { Component, OnInit, Injectable, Inject, Input, HostListener } from '@angular/core';
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

  movies: Movie[] = new Array<Movie>();
  filteredMovies: Movie[] = new Array<Movie>();
  _searchTermByTitle: string;
  _searchTermByDirector: string;
  _searchTermByReleaseDate: string;
  _searchTermByType: string;
  
  @Input('sortable-column')
  columnName: string;

  @Input('sort-direction')
  sortDirection: string = '';

  @HostListener('click')
  sort() {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getMovies().subscribe(
      data => this.filteredMovies = data
    )
  }
  deleteMovie(movie: Movie){
    this.dataService.deleteMovie(movie).subscribe(
      data => {
        this.filteredMovies = this.filteredMovies.filter(m => m !== movie);
      }
    )
  }
  addMovie(){
    this.router.navigate(['add-movie']);
  }
  editMovie(movie: Movie){
    this.router.navigate(['update-movie/' + movie.id.toString()]);
  }
  loadJSONFile() {
    this.dataService.loadJsonFile().subscribe(
      data => data.forEach(function(movie: Movie){
        this.dataService.addMovie(movie).subscribe();
      }.bind(this), this.filteredMovies = data
    ))
  }
  get searchTermByTitle() : string {
    return this._searchTermByTitle ;
  }
  set searchTermByTitle(value: string){
    this._searchTermByTitle = value;
    this.filteredMovies = this.movies.filter(movie => movie.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  get searchTermByDirector() : string {
    return this._searchTermByDirector ;
  }
  set searchTermByDirector(value: string){
    this._searchTermByDirector = value;
    this.filteredMovies = this.movies.filter(movie => movie.director.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  get searchTermByReleaseDate() : string {
    return this._searchTermByReleaseDate ;
  }
  set searchTermByReleaseDate(value: string){
    this._searchTermByReleaseDate = value;
    this.filteredMovies = this.movies.filter(movie => movie.releaseDate.toString().toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  get searchTermByType() : string {
    return this._searchTermByType ;
  }
  set searchTermByType(value: string){
    this._searchTermByType = value;
    this.filteredMovies = this.movies.filter(movie => movie.type.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}
