import { Component,inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';
import { email } from '@angular/forms/signals';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router)
errorLogin = signal(false)


  formulario = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  senha: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  logar(){
this.errorLogin.set(false);

if(this.formulario.invalid){
this.formulario.markAllAsTouched();
return;
  }

  const email = this.formulario.value.email ?? '';
  const senha = this.formulario.value.senha ?? '';

  const loginRealizado = this.authService.login(email,senha)

  if (!loginRealizado) {
this.errorLogin.set(true);
return;
}

this.router.navigateByUrl('/home')


  }}

