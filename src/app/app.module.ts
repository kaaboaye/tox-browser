import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './ui/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthService } from './auth/auth.service';
import { Routes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MeComponent } from './views/me/me.component';
import { UserService } from './models/user/user.service';
import { UserComponent } from './views/user/user.component';
import { ClientsComponent } from './views/clients/clients.component';
import { ClientComponent } from './views/client/client.component';
import { ClientService } from './models/client/client.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatChipsModule, MatDialogModule, MatExpansionModule, MatInputModule, MatSelectModule, MatSnackBarModule, MatTableModule,
  MatTabsModule
} from '@angular/material';
import { ClientsListComponent } from './views/clients/clients-list/clients-list.component';
import { StaffListComponent } from './views/client/staff-list/staff-list.component';
import { PeopleService } from './models/person/people.service';
import { PersonComponent } from './models/person/person/person.component';
import { ClientPersonNewComponent } from './views/client/client-person-new/client-person-new.component';
import { StaffListPatchComponent } from './views/client/staff-list/staff-list-patch/staff-list-patch.component';
import { HttpErrorHandlerProvider } from './http-error-handler';
import { ClientNewComponent } from './views/clients/client-new/client-new.component';
import { JobsComponent } from './views/jobs/jobs.component';
import { JobsListComponent } from './views/jobs/jobs-list/jobs-list.component';
import { JobsService } from './models/job/jobs.service';
import { JobNewComponent } from './views/jobs/job-new/job-new.component';
import { DevicesComponent } from './views/devices/devices.component';
import { DeviceNewComponent } from './views/devices/device-new/device-new.component';
import { DevicesService } from './models/device/devices.service';
import { DevicesListComponent } from './views/devices/devices-list/devices-list.component';
import { DeviceComponent } from './views/device/device.component';
import { PersonDialogComponent } from './models/person/person/person-dialog/person-dialog.component';
import { JobComponent } from './views/job/job.component';
import { JobOverviewComponent } from './views/job/job-overview/job-overview.component';
import { JobRegisterComponent } from './views/job/job-register/job-register.component';
import { JobRegistrationService } from './models/job-registration/job-registration.service';
import { JobDiagnosisComponent } from './views/job/job-diagnosis/job-diagnosis.component';
import { JobDiagnosisService } from './models/job-diagnosis/job-diagnosis.service';
import { LoadingComponent } from './ui/loading/loading.component';
import { JobOrderComponent } from './views/job/job-order/job-order.component';
import { JobOrdersService } from './models/job-order/job-orders.service';
import { JobCompletionComponent } from './views/job/job-completion/job-completion.component';
import { JobCompletionService } from './models/job-completion/job-completion.service';
import { JobClosureComponent } from './views/job/job-closure/job-closure.component';
import { JobClosureService } from './models/job-closure/job-closure.service';
import { JobOverviewRegistrationComponent } from './views/job/job-overview/job-overview-registration/job-overview-registration.component';
import { StaffComponent } from './views/staff/staff.component';
import { UserChangePasswordComponent } from './views/user/user-change-password/user-change-password.component';
import { UserNewComponent } from './views/staff/user-new/user-new.component';
import { JobOverviewDiagnosisComponent } from './views/job/job-overview/job-overview-diagnosis/job-overview-diagnosis.component';
import { JobOverviewOrderComponent } from './views/job/job-overview/job-overview-order/job-overview-order.component';
import { JobOverviewCompletionComponent } from './views/job/job-overview/job-overview-completion/job-overview-completion.component';
import { JobOverviewClosureComponent } from './views/job/job-overview/job-overview-closure/job-overview-closure.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MeComponent,
    UserComponent,
    ClientsComponent,
    ClientComponent,
    ClientNewComponent,
    ClientsListComponent,
    StaffListComponent,
    PersonComponent,
    ClientPersonNewComponent,
    StaffListPatchComponent,
    JobsComponent,
    JobsListComponent,
    DevicesListComponent,
    JobNewComponent,
    DevicesComponent,
    DeviceNewComponent,
    DeviceComponent,
    PersonDialogComponent,
    JobComponent,
    JobOverviewComponent,
    JobRegisterComponent,
    JobDiagnosisComponent,
    LoadingComponent,
    JobOrderComponent,
    JobCompletionComponent,
    JobClosureComponent,
    JobOverviewRegistrationComponent,
    StaffComponent,
    UserChangePasswordComponent,
    UserNewComponent,
    JobOverviewDiagnosisComponent,
    JobOverviewOrderComponent,
    JobOverviewCompletionComponent,
    JobOverviewClosureComponent
  ],
  entryComponents: [
    ClientPersonNewComponent,
    StaffListPatchComponent,
    ClientNewComponent,
    JobNewComponent,
    DeviceNewComponent,
    PersonDialogComponent,
    UserChangePasswordComponent,
    UserNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
    MatSnackBarModule,
    MatChipsModule,
    MatSelectModule
  ],
  providers: [
    AuthService,
    UserService,
    ClientService,
    PeopleService,
    HttpErrorHandlerProvider,
    JobsService,
    DevicesService,
    JobRegistrationService,
    JobDiagnosisService,
    JobOrdersService,
    JobCompletionService,
    JobClosureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
