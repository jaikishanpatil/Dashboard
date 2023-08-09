import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    MainComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }
