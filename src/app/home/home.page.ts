import { Component } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { HttpClient } from '@angular/common/http';
import { MovieDetailPage } from '../movie-detail/movie-detail.page';
import { PopoverComponent } from '../popover/popover.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  response = [];
  constructor(public navCtrl: NavController, private http: HttpClient, public popoverController: PopoverController, private storage: Storage) {
 
  }

  async presentPopover(ev: any, name: string) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        title: name
      },
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  ROOT_URL="http://localhost:3000/movie/all";

  movies: any;

  public goDetail(id: string){
    this.navCtrl.navigateForward('movie-detail/'+id)
  }


  ngOnInit() {
    this.movies = this.http.get(this.ROOT_URL);
  }
}
