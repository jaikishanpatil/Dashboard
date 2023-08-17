import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsersComponent } from '../users/users.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
