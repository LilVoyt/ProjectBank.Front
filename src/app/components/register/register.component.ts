import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { Register } from '../../models/register';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private registerService: RegisterService, private fb: FormBuilder ){
    this.registerForm = this.fb.group({
      name : [''],
      login : [''],
      password : [''],
      firstName : [''],
      lastName : [''],
      country : [''],
      phoneNumber : [''],
      email : [''],
    })
  } 
  
  onSubmit(): void {
    if (this.registerForm.valid) {
      const newRegister: Register = this.registerForm.value;
      this.registerService.createUser(newRegister).subscribe(() => {
        this.registerForm.reset();
      });
      console.log(this.registerForm.value);
    }
  }
  
}
