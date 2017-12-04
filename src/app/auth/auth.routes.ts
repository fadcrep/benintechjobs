import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ResetComponent } from './components/reset/reset.component';

export const AuthRoutes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'reset', component: ResetComponent }
];
