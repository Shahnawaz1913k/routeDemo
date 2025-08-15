// app.route.ts
import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { App } from './app';
import { Profile } from './profile/profile';
import { Home } from './home/home';

export const routes: Routes = [
    //{ path: '', redirectTo: '/', pathMatch: 'full' }, // default route
    {path: 'home', component: Home},
    { path: 'about', component: About },
    { path: 'login', component: Login },
    { path: 'contact', component: Contact },
    { path: 'profile', component: Profile },
    { path: '', component: Home },
   // { path: '**', redirectTo: '/login' } //wildcard
];
