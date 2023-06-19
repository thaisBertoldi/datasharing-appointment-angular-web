import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;

  cpf = new FormControl('', [Validators.minLength(11)]);
  password = new FormControl('', [Validators.minLength(6)]);

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  onFormSubmit(): void {
    console.log('CPF:' + this.form.get('cpf')?.value);
    console.log('Password:' + this.form.get('password')?.value);
  }

  createForm() {
    this.form = this.formBuilder.group({
      cpf: [''],
      password: [''],
    });
  }
}
