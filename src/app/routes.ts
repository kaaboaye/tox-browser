import { Routes as IRoutes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { NotAuthGuard } from './auth/not-auth.guard';
import { MeComponent } from './views/me/me.component';
import { ClientsComponent } from './views/clients/clients.component';
import { JobsComponent } from './views/jobs/jobs.component';
import { DevicesComponent } from './views/devices/devices.component';

export const Paths = {
  Root: '',
  Login: 'login',
  Register: 'register',
  Me: 'me',
  Clients: 'clients',
  Jobs: 'jobs',
  Devices: 'devices'
};

export const Routes: IRoutes = [
  { path: Paths.Root, component: HomeComponent },
  { path: Paths.Login, component: LoginComponent },
  { path: Paths.Register, component: RegisterComponent },
  { path: Paths.Me, component: MeComponent },
  { path: Paths.Clients, component: ClientsComponent },
  { path: Paths.Jobs, component: JobsComponent },
  { path: Paths.Devices, component: DevicesComponent }
];
