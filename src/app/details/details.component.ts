import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service' ;
import { Observable } from 'rxjs' ;
import { Movie } from '../model/movie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie: Movie;
  id:number;

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => this.id = params.id)
  }

  ngOnInit() {
    this.data.getMovie(this.id).subscribe(
      data => this.movie = data
    )    
  }
  loadListOfMovies(){
    this.router.navigate(['movies']);
  }
}
