import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-edit-customer',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css'
})
export class EditCustomerComponent {

  customerForm: FormGroup;

  constructor(private customerService: CustomerService, private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      country: [''],
      phoneNumber: [''],
      email: ['']
    });
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      const newCustomer: Customer = this.customerForm.value;
      this.customerService.createCustomer(newCustomer).subscribe(() => {
        this.customerForm.reset();
      });
      console.log(this.customerForm.value);
    }
  }

}
