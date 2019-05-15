import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'secret'
  })
};

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  registerModel:User=new User();
  users=[];
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
 
  }

  sendPostRequest(registerModel: User): Observable<any> {    
    return this.httpClient.post("http://localhost:3000/auth/signup/", registerModel, httpOptions);
  }

  createUser(username: string, email: string, password: string){  
    this.registerModel.username = username;
    this.registerModel.email = email;
    this.registerModel.password = password;  

    if(this.registerModel.username!='' && this.registerModel.password!=''  && this.registerModel.email!=''){  
      
      this.sendPostRequest(this.registerModel)
      .subscribe(user => this.users.push(user));

      console.log(this.users);
      this.navCtrl.navigateForward('home');
    }
    else{      
    }
  }

  ngOnInit() {

  }

  goToLogin(){

    this.navCtrl.navigateForward('login')
  }

}
