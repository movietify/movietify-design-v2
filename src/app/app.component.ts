import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient } from '@angular/common/http';
import { LoginPageModule } from '../app/login/login.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  ROOT_URL="localhost:3000";
  userId: any;

  public appPages = [
    {
      title: 'Anasayfa',
      url: '/home'
    },
    {
      title: 'Profil',
      url: '/profile'
    },
    {
      title: 'Hakkında',
      url: '/about'
    },
    {
      title: 'Çıkış Yap',
      url: '/login'
    }
  ];

  constructor(
    private http: HttpClient,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
