import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Customer } from './models/customer';
import { CustomerService } from './services/customer.service';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, EditCustomerComponent, AppFooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjectBank.Front';
  customers:  Customer[] = [];

  constructor() {}

  ngOnInit() : void {
  }

  ngOnChange() : void {
  }
}
