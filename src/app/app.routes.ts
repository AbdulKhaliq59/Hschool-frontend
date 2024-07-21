import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// Routes configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login Page'
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'Signup Page'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard'
    }
];
