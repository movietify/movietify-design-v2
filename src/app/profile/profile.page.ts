import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { PopoverController, NavController } from '@ionic/angular';
import { ListPopoverComponent } from '../list-popover/list-popover.component';

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

  _userId: Promise<any>;
  userId:String = "";
  userInfo: any;
  lists: any;
  constructor(private http: HttpClient, private storage: Storage, public popoverController: PopoverController, public navCtrl: NavController) { }

  ROOT_URL= "http://localhost:3000/profile/info/";
  list_Url = "http://localhost:3000/profile/list/all/";

  getStorage(){
    return this.storage.get("userId");
  }

  getUserInfo(){
    this.userInfo = this.http.get(this.ROOT_URL);
    this.lists = this.http.get(this.list_Url);
    console.log(this.lists);
  }

  async listAddPopup(ev: any) {
    const popover = await this.popoverController.create({
      component: ListPopoverComponent,
      event: ev,
      translucent: true
    });

    popover.onDidDismiss();

    return await popover.present();
  }

  goListDetail(id: string){
    this.navCtrl.navigateForward('list-in-movies/'+id)
  }

  ngOnInit() {
    this._userId = this.getStorage();
    this._userId.then((val) => {
      if(val){
        this.userId = val;
        console.log(this.userId);
        this.ROOT_URL+=this.userId;
        this.list_Url+=this.userId;
        this.getUserInfo();
      }
    });
    
  }

}
