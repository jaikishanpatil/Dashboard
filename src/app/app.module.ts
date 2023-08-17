import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authentication/login/login.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { NotFoundComponent } from './authentication/not-found/not-found.component';

const components: any[] = [
  LoginComponent,
  ForgetPasswordComponent,
  NotFoundComponent,
];
@NgModule({
  declarations: [AppComponent ,...components],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
