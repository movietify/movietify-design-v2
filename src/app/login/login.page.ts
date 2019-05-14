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
  message = "";
  userVal:string;
  results: Observable<any>;
  data: Observable<any>;
  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public httpClient: HttpClient) {
 
  }

  sendPostRequest(loginModel: User): Observable<any> {
    this.results = this.httpClient.post("http://localhost:3000/auth/signin/", loginModel, httpOptions);
    return this.results;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginThisUser(username: string, password: string){
    this.loginModel.username=username;
    this.loginModel.password=password;

    console.log(this.loginModel);
    if(this.loginModel.username!='' && this.loginModel.password!=''){

      if(this.message != "Auth failed"){

          this.sendPostRequest(this.loginModel)
        .subscribe(user => this.user.push(user));
        
        this.navCtrl.navigateForward('home');
      }
      else{
        console.log("asdasd");
      }

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
