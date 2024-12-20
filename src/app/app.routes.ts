import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PersonalCabinetComponent } from './components/personal-cabinet/personal-cabinet.component';
import { authGuard } from './guards/auth.guard';
import { MoneyTransferComponent } from './components/money-transfer/money-transfer.component';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { CardSetInfoComponent } from './components/card-set-info/card-set-info.component';
import { CreateCreditComponent } from './components/create-credit/create-credit.component';
import { CreditManagementComponent } from './components/credit-management/credit-management.component';
import { CreditInfoComponent } from './components/credit-info/credit-info.component';


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
        path: 'personal-cabinet',
        component: PersonalCabinetComponent, canActivate: [authGuard],
        title: 'Personal Cabinet Page'
    },
    {
        path: 'money-transfer',
        component: MoneyTransferComponent, canActivate: [authGuard],
        title: 'Money Transfer Page'
    },
    {
        path: 'create-card',
        component: CreateCardComponent, canActivate: [authGuard],
        title: 'Create Card Page'
    },
    {
        path: 'create-card/:type',
        component: CardSetInfoComponent, canActivate: [authGuard],
        title: 'Set Card Page'
    },
    {
        path: 'credit-management',
        component: CreditManagementComponent, canActivate: [authGuard],
        title: 'Credit Management Page'
    },
    {
        path: 'create-credit',
        component: CreateCreditComponent, canActivate: [authGuard],
        title: 'Create Credit Page'
    },
    {
        path: 'credit-info/:id',
        component: CreditInfoComponent, canActivate: [authGuard],
        title: 'Credit Info Page'
    }
];
