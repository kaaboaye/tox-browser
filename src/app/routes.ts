import { Routes as IRoutes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { MeComponent } from './views/me/me.component';
import { ClientsComponent } from './views/clients/clients.component';
import { JobsComponent } from './views/jobs/jobs.component';
import { DevicesComponent } from './views/devices/devices.component';
import { DeviceComponent } from './views/device/device.component';
import { JobComponent } from './views/job/job.component';

export const Paths = {
  Root: '',
  Login: 'login',
  Register: 'register',
  Me: 'me',
  Clients: 'clients',
  Jobs: 'jobs',
  Job: 'job',
  Devices: 'devices',
  Device: 'device'
};

export const Routes: IRoutes = [
  { path: Paths.Root, component: HomeComponent },
  { path: Paths.Login, component: LoginComponent },
  { path: Paths.Register, component: RegisterComponent },
  { path: Paths.Me, component: MeComponent },
  { path: Paths.Clients, component: ClientsComponent },
  { path: Paths.Jobs, component: JobsComponent },
  { path: Paths.Job + '/:jobId', component: JobComponent},
  { path: Paths.Devices, component: DevicesComponent },
  { path: Paths.Device + '/:deviceId', component: DeviceComponent }
];
