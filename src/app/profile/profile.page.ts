import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'secret'
  })
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userId = "";
  constructor(private http: HttpClient, private storage: Storage) { }

  getStorage(){
    return this.storage.getItem("userId");
  }

  ngOnInit() {
    this.userId = this.getStorage();
    console.log(this.userId);
  }

}
