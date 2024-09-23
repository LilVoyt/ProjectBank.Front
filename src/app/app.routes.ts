import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './login/login.component';
import { PersonalCabinetComponent } from './components/personal-cabinet/personal-cabinet.component';


export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        title: 'Home Page'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login Page'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register Page'
    },
    {
        path: 'personal-cabinet/:id',
        component: PersonalCabinetComponent,
        title: 'Personal Cabinet Page'
    }
];
