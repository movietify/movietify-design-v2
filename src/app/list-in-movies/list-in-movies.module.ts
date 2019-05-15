import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListInMoviesPage } from './list-in-movies.page';

const routes: Routes = [
  {
    path: '',
    component: ListInMoviesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListInMoviesPage]
})
export class ListInMoviesPageModule {}
