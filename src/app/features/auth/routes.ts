import { Routes } from '@angular/router';
import { LoginContainer } from './login/login.container';
// import { RegisterComponent } from './register/register.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginContainer,
  },
//   {
//     path: 'register',
//     component: RegisterComponent,
//   }
];
