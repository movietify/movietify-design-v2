import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  ROOT_URL="localhost:3000";

  movies: any;

  getMovies() {
    this.movies = this.http.get(this.ROOT_URL + '/movie/all');
  }


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
      title: 'Login',
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
