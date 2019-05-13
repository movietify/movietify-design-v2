import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  ROOT_URL="localhost:3000";

  movies: any;

  getMovies() {
    this.movies = this.http.get(this.ROOT_URL + '/movie/all');
  }

  

}
