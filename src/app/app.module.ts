import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MoviesComponent } from './movies/movies.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http' ;
import { DataService } from './services/data.service';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { SortService } from './services/sort.service';
import { SortableTableDirective } from './directives/sortable-table.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MoviesComponent,
    DetailsComponent,
    AddMovieComponent,
    UpdateMovieComponent,
    HomeComponent,
    SortableTableDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService, SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
