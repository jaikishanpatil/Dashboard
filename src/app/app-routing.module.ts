import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { NotFoundComponent } from './authentication/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forget-pass', component: ForgetPasswordComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/Modules/components/main/main.module').then(
        (m) => m.MainModule
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
