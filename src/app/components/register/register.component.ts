import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { Register } from '../../models/register';
import { CommonModule } from '@angular/common';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']  // виправлено styleUrls
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      login: [''],
      password: [''],
      firstName: [''],
      lastName: [''],
      country: [''],
      phoneNumber: [''],
      email: [''],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const newRegister: Register = this.registerForm.value;

      const registerObserver: Observer<any> = {
        next: (response) => {
          console.log('Register successful:', response);
          this.registerService.storeToken(response.token);
          this.router.navigate([`/personal-cabinet`]); 
        },
        error: (error) => {
          console.error('Register failed:', error);
          this.registerForm.reset();
        },
        complete: () => {
          console.log('Register request completed.');
        }
      };

      this.registerService.createUser(newRegister).subscribe(registerObserver);
    }
  }
}
