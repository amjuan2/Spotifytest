import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

//forms
import { FormsModule } from '@angular/forms';

//mat

import { MatButtonModule } from "@angular/material/button";
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { SongsComponent } from './songs/songs.component';


@NgModule({
  declarations: [
    HomeComponent,
    SongsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,


    //forms
    FormsModule,

    //mat
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule
  ]
})
export class HomeModule { }
