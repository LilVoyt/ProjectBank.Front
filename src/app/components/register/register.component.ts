import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Register } from '../../models/register';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
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
