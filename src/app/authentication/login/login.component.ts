import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LOGIN_FORM_MODEL } from 'src/app/Models/form-base.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private readonly formbilder: FormBuilder,
    private readonly route: Router
  ) {}
  form_model = LOGIN_FORM_MODEL;
  loginForm: FormGroup | any;
  get username() {
    return this.loginForm.controls[LOGIN_FORM_MODEL.USERNAME];
  }
  get password() {
    return this.loginForm.controls[LOGIN_FORM_MODEL.PASSWORD];
  }
  ngOnInit(): void {
    this.initilizeForm();
  }

  initilizeForm() {
    this.loginForm = this.formbilder.group({
      username: ['', { validators: [Validators.required] }],
      password: ['', { validators: [Validators.required] }],
    });
  }
  onSubmit() {
    if (this.username.value === 'admin' && this.password.value === 'admin') {
      this.route.navigate(['/admin']);
      this.username.reset();
      this.password.reset();
    } else {
      this.username.reset();
      this.password.reset();
    }
  }
  navigate(key: string) {
    switch (key) {
      case 'forget-pass': {
        this.route.navigate(['/main/forget-password']);
        break;
      }
      case 'crate-account': {
        this.route.navigate(['/main/crate-account']);
        break;
      }
      default:
        break;
    }
  }
}
