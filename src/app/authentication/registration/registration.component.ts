import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { REGISTRATION_FORM_MODEL } from 'src/app/Models/registration-form.enum';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  form_model = REGISTRATION_FORM_MODEL;
  regForm: FormGroup | any;
  constructor(
    private readonly formbilder: FormBuilder,
    private readonly route: Router
  ) {}

  get username() {
    return this.regForm.controls[REGISTRATION_FORM_MODEL.USERNAME];
  }
  get password() {
    return this.regForm.controls[REGISTRATION_FORM_MODEL.PASSWORD];
  }
  get first_name() {
    return this.regForm.controls[REGISTRATION_FORM_MODEL.FIRSTNAME];
  }
  get last_name() {
    return this.regForm.controls[REGISTRATION_FORM_MODEL.LASTNAME];
  }
  get email() {
    return this.regForm.controls[REGISTRATION_FORM_MODEL.EMAIL];
  }
  get confirm_password() {
    return this.regForm.controls[REGISTRATION_FORM_MODEL.CONFIRMPASSWORD];
  }

  ngOnInit(): void {
    this.initilizeForm();
  }

  initilizeForm() {
    this.regForm = this.formbilder.group({
      username: ['', { validators: [Validators.required] }],
      password: ['', { validators: [Validators.required] }],
      confirm_password: ['', { validators: [Validators.required] }],
      first_name: ['', { validators: [Validators.required] }],
      last_name: ['', { validators: [Validators.required] }],
      email: [
        '',
        {
          validators: [
            Validators.required,
            Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
          ],
        },
      ],
    });
  }

  onSingUp(){
    console.log(this.regForm.value);
    this.route.navigate(['/admin'])
  }
  onSIngIn(){
    this.route.navigate(['/admin'])
  }
}
