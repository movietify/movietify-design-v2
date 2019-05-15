import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { List } from '../entities/list';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'secret'
  })
};

@Component({
  selector: 'app-list-popover',
  templateUrl: './list-popover.component.html',
  styleUrls: ['./list-popover.component.scss'],
})
export class ListPopoverComponent implements OnInit {

  ListModel:List = new List();
  Lists = [];
  _userId: Promise<any>;
  userId:string = "";
  constructor(private http: HttpClient, private storage: Storage) { }

  getStorage(){
    return this.storage.get("userId");
  }

  sendPostRequest(ListModel: List): Observable<any> {    
    return this.http.post("http://localhost:3000/movie/list/create", ListModel, httpOptions);
  }
  
  saveList(listName: string){
    this.ListModel.user_id = this.userId;
    this.ListModel.name = listName;

    if(this.ListModel.user_id != '' && this.ListModel.name != ''){
      this.sendPostRequest(this.ListModel)
      .subscribe(list => this.Lists.push(list));
      
    }else{

    }
  }

  ngOnInit() {
    this._userId = this.getStorage();
    this._userId.then((val) => {
      if(val){
        this.userId = val;
      }
    });
  }

}
