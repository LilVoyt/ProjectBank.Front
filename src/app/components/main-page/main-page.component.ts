import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AppFooterComponent } from '../app-footer/app-footer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { HeaderComponent } from '../header/header.component';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { PersonalCabinetService } from '../../services/personal-cabinet.service';
import { Card } from '../../models/card';
import { jwtDecode } from 'jwt-decode';
import { JwtPayloadUpgraded } from '../../models/jwtPayloadUpgraded';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, EditCustomerComponent, AppFooterComponent, HeaderComponent, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  title = 'ProjectBank.Front';
  customers:  Customer[] = [];
  cardsArray: Card[] = [];

  constructor(private customerService: CustomerService, private personalCabinetService: PersonalCabinetService, private router: Router) {}

  ngOnInit() : void {
    const token = localStorage.getItem('token')??'';
    const decoded = jwtDecode<JwtPayloadUpgraded>(token);
    console.log(decoded)
    if (token) {
      this.personalCabinetService.getAccountById(decoded.certserialnumber).subscribe(account => {
        console.log('Received account:', account);
        this.cardsArray = account.cards;
      });
    }
  }

  ngOnChange() : void {

  }

  creditDetails(){
    this.router.navigate(['/credit-management'])
  }
}
