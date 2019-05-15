import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../entities/user';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';


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
  user = [];
  currentUser = [];
  userVal:string;
  constructor(public navCtrl: NavController, public httpClient: HttpClient, private storage: Storage) {
 
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
      
      this.sendPostRequest(this.loginModel).subscribe(user => {this.user.push(user), this.currentUser.push(user)});

      setTimeout(()=>{    
        console.log(this.user);

        if(this.user[0].message=="Auth successful") {
          console.log("başarılı");
          this.user = [];
          this.saveStorage();
          this.navCtrl.navigateForward('home');
        }
        else{
        }
      }, 1000); 
    }
    else{
      
    }
  
  }

  goToRegister(){
    this.navCtrl.navigateForward('register');
  }

  saveStorage(){
    this.storage.set("userId",this.currentUser[0].userId);
  }

  ngOnInit() {
    this.currentUser = [];
  }

}
