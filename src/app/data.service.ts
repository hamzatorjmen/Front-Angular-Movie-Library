import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './model/movie.model'

@Injectable()

export class DataService {

  baseUrl: string ='http://localhost:8089/library/movie/';

  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get<Movie[]>(this.baseUrl);
  }
  getMovie(id: number) {
    return this.http.get<Movie>(this.baseUrl + 'id/' + id);
  }
  deleteMovie(movie: Movie){
    console.log(this.baseUrl + movie.id);
    return this.http.delete(this.baseUrl + movie.id) ;
  }
}
