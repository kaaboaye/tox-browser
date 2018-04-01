import { Routes as IRoutes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { NotAuthGuard } from './auth/not-auth.guard';
import { MeComponent } from './views/me/me.component';
import { ClientsComponent } from './views/clients/clients.component';

export const Routes: IRoutes = [
  { path: '', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    children: [
      { path: 'me', component: MeComponent },
      { path: 'clients', component: ClientsComponent },
    ]
  }
];
