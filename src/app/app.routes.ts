import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './account/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { OtpScreenComponent } from './login/otp-screen/otp-screen.component';
import { NameScreenComponent } from './login/name-screen/name-screen.component';

export const routes: Routes = [
    {
        path:'',
        component:HomepageComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'otp-screen',
        component:OtpScreenComponent
    },
    {
        path:'name-screen',
        component:NameScreenComponent
    }
];
