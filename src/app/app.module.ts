import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { PopoverComponent } from './popover/popover.component';
import { ListPopoverComponent } from './list-popover/list-popover.component';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PopoverComponent,
    ListPopoverComponent
  ],
  entryComponents: [
    PopoverComponent,
    ListPopoverComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['voluser', 'sqlite', 'websql']
    }), 
    IonicStorageModule,
    FormsModule
  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
