import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
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
