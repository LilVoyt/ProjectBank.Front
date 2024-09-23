import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Login } from '../models/login';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private registerService: RegisterService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const newLogin: Login = this.loginForm.value;
      const loginObserver: Observer<any> = {
        next: (response) => {
          console.log('Login successful:', response);
          this.router.navigate([`/personal-cabinet/${newLogin.login}`]);
        },
        error: (error) => {
          console.error('Login failed:', error);
          this.loginForm.reset();
        },
        complete: () => {
          console.log('Login request completed.');
        }
      };

      this.registerService.loginUser(newLogin).subscribe(loginObserver);
      console.log(this.loginForm.value);
    }
  }
}
