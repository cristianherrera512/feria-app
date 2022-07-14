import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { LoginService } from './login.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(8)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router 
  ) {}

  ngOnInit(): void {}

  async login() {
    const { email, password } = this.loginForm.value;

    const login$ = this.loginService.login(email, password);
    const res: any = await lastValueFrom(login$);

    if (res.ok && res.data.length > 0) {
      this.router.navigate(['./main']);
    } else {
      this.addSingle();
      this.loginForm.patchValue({password: ''});
    }
  }

  addSingle() {
    this.messageService.add({
      key: 'myKey',
      severity: 'error',
      summary: 'Login Inválido',
      detail: 'Email o Contraseña no son válidos.',
      life: 3000
    });
  }

  validField(field: string) {
    return (
      this.loginForm.controls[field].errors &&
      this.loginForm.controls[field].touched
    );
  }
}
