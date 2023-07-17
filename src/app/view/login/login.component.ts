import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;

  cpf = new FormControl('', [Validators.minLength(11)]);
  password = new FormControl('', [Validators.minLength(6)]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) {
    this.createForm();
  }

  onFormSubmit(): void {
    console.log('CPF:' + this.form.get('cpf')?.value);
    console.log('Password:' + this.form.get('password')?.value);
    if(this.form.get('cpf')?.value === "000.000.000-00" && this.form.get('password')?.value === "1234") {
      this.router.navigate(["/"]);
    } else {
      console.log("Usuario ou senha incorreta");
    }
  }

  createForm() {
    this.form = this.formBuilder.group({
      cpf: [''],
      password: [''],
    });
  }
}
