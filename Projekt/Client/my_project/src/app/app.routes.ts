import { Routes } from '@angular/router';
import { authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: 'signup', loadComponent: () => import('./signup/signup.component').then((c) => c.SignupComponent)},
    {path: 'login', loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent)},
    {path: 'user-management', loadComponent: () => import('./user-management/user-management.component').then((c) => c.UserManagementComponent), canActivate: [authGuard]},
    {path: 'guest/products', loadComponent: () => import('./guest-products/guest-products.component').then((c) => c.GuestProductsComponent)},
    {path: 'newproduct', loadComponent: () => import('./newproduct/newproduct.component').then((c) => c.NewproductComponent)},
    {path: 'signup-producer', loadComponent: () => import('./signup-producer/signup-producer.component').then((c) => c.SignupProducerComponent)},
    {path: 'newevent', loadComponent: () => import('./newevent/newevent.component').then((c) => c.NeweventComponent)},
    {path: 'guest/events', loadComponent: () => import('./guest-events/guest-events.component').then((c) => c.GuestEventsComponent)},
    {path: 'welcome', loadComponent: () => import('./welcome/welcome.component').then((c) => c.WelcomeComponent)},
    {path: 'login-options', loadComponent: () => import('./login-options/login-options.component').then((c) => c.LoginOptionsComponent)},
    {path: 'login-producer', loadComponent: () => import('./login-producer/login-producer.component').then((c) => c.LoginProducerComponent)},
    {path: 'main/products', loadComponent: () => import('./main-products/main-products.component').then((c) => c.MainProductsComponent), canActivate: [authGuard]},
    {path: 'main/events', loadComponent: () => import('./main-events/main-events.component').then((c) => c.MainEventsComponent), canActivate: [authGuard]},
    {path: 'main/producers', loadComponent: () => import('./main-producers/main-producers.component').then((c) => c.MainProducersComponent), canActivate: [authGuard]},
    {path: 'producer/main', loadComponent: () => import('./producer-main/producer-main.component').then((c) => c.ProducerMainComponent), canActivate: [authGuard]},
    {path: 'myprod', loadComponent: () => import('./my-products/my-products.component').then((c) => c.MyProductsComponent)},
    {path: '**', redirectTo: 'welcome'}
];
