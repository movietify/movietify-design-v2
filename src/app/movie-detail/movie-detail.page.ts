import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})



export class MovieDetailPage implements OnInit {
  
  id:String = "";
  


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ROOT_URL="http://localhost:3000/movie/details/";

  details: any;

  getDetails() {    
    this.details = this.http.get(this.ROOT_URL);
  }


  ngOnInit() {    
    this.route.params.subscribe(params => {
      this.id=params['id']
    });
    console.log(this.id);
    this.ROOT_URL+=this.id;
    this.getDetails();
  }


}
