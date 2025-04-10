import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { authService} from '@auth/services/auth.sevrice';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule,Validators } from '@angular/forms';
import { ApiService } from '@core/services/api.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb = inject(FormBuilder)
  authService: authService = inject(authService);
  router = inject(Router)

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit() {
    const user  = this.form.getRawValue()


    this.authService.login(user).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/dashboard');
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }
}
