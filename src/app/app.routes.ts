import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';


export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        title: 'Home Page'
    },
    {
        path: 'login',
        component: EditCustomerComponent,
        title: 'Login Page'
    }
];
