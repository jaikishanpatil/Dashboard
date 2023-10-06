import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MaterialModule } from '../../material/material.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { UsersComponent } from '../users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';

const components: any[] = [
  MainComponent,
  NavBarComponent,
  DashboardComponent,
  HeaderComponent,
  UsersComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MainRoutingModule, MaterialModule, SharedModule],
  exports:[...components]
})
export class MainModule {}
