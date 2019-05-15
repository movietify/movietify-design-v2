import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-in-movies',
  templateUrl: './list-in-movies.page.html',
  styleUrls: ['./list-in-movies.page.scss'],
})
export class ListInMoviesPage implements OnInit {

  id: string;
  movies: any;
  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  ROOT_URL = "http://localhost:3000/profile/list/details/";

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id=params['id']
    });
    this.ROOT_URL+=this.id;
    this.movies = this.http.get(this.ROOT_URL);
  }

}
