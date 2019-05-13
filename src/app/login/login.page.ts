import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../entities/user';
import { AlertController, NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'secret'
  })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginModel:User=new User();
  user=[];
  userVal:string;
  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public httpClient: HttpClient) {
 
  }

  sendPostRequest(loginModel: User): Observable<any> {    
    return this.httpClient.post("http://localhost:3000/auth/signin/", loginModel, httpOptions);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginThisUser(username: string, password: string){
    this.loginModel.username=username;
    this.loginModel.password=password;

    console.log(this.loginModel);
    if(this.loginModel.username!='' && this.loginModel.password!=''){
      
      this.sendPostRequest(this.loginModel)
      .subscribe(user => this.user.push(user));

      console.log(this.user['username']);



      const animationsOptions = {
        animation: 'android-transition',
        duration: 2000,
        direction: 'next'
  
      }
  
      this.navCtrl.navigateForward('home');

    }
    else{
      
    }
  
  }

  goToRegister(){
    this.navCtrl.navigateForward('register');
  }

  ngOnInit() {
  }

}
