import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from '../Modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../shared/shared.module';

const components:any[] = [
  LoginComponent,
  ForgetPasswordComponent,
  NotFoundComponent,
  AuthenticationComponent,
  RegistrationComponent
]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[...components]
})
export class AuthenticationModule { }
