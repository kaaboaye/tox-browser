import { Routes as IRoutes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const Routes: IRoutes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent }
    ]
  }
];
