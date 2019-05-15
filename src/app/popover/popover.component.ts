import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpInterceptor } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { listAddMovies } from '../entities/listAddMovies';
import { Observable } from 'rxjs';
import { NavParams } from '@ionic/angular';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'PUT',
    'Content-Type':  'application/json',
    'Authorization': 'secret'
  })
};

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  listModel:listAddMovies = new listAddMovies();
  items:any;
  _userId: Promise<any>;
  _movieId: Promise<any>;
  userId:string = "";
  movieName:string = "";
  movies = [];
  constructor(private http: HttpClient, private storage: Storage, private navParams: NavParams) {}

  ROOT_URL = "http://localhost:3000/profile/list/all/";

  sendPostRequest(listModel: listAddMovies): Observable<any> {    
    return this.http.put("http://localhost:3000/movie/list/add", JSON.stringify(listModel), httpOptions);
  }

  getStorage(){
    this.storage.get("userId").then((val) => {
      if(val){
        this.userId = val;
        this.ROOT_URL+=this.userId;
        this.getList();
      }
    });
  }

  getList(){
    this.http.get(this.ROOT_URL).subscribe(res => this.items = res);
  }

  addMovie(listID: string){
    this.listModel.userID = this.userId;
    this.listModel.movieName = this.movieName;
    this.listModel.listID = listID;

    console.log(this.listModel.userID);
    console.log(this.listModel.movieName);
    console.log(this.listModel.listID);

    this.sendPostRequest(this.listModel)
      .subscribe(user => this.movies.push(user));

    console.log(this.movies);
  }

  ngOnInit() {
    this.getStorage();
    this.movieName = this.navParams.get('title');
  }

}
