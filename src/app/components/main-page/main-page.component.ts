import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFooterComponent } from '../app-footer/app-footer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { HeaderComponent } from '../header/header.component';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, EditCustomerComponent, AppFooterComponent, HeaderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  title = 'ProjectBank.Front';
  customers:  Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() : void {
  }

  ngOnChange() : void {

  }
}
