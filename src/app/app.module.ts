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
import { AuthGuard } from './auth/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotAuthGuard } from './auth/not-auth.guard';
import { MeComponent } from './views/me/me.component';
import { UserService } from './models/user/user.service';
import { UserComponent } from './models/user/user.component';
import { ClientsComponent } from './views/clients/clients.component';
import { ClientComponent } from './models/client/client/client.component';
import { ClientNewComponent } from './models/client/client-new/client-new.component';
import { ClientService } from './models/client/client.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatExpansionModule, MatInputModule, MatTableModule, MatTabsModule } from '@angular/material';
import { ClientsListComponent } from './models/client/clients-list/clients-list.component';
import { StaffListComponent } from './models/person/staff-list/staff-list.component';
import { PeopleService } from './models/person/people.service';
import { PersonComponent } from './models/person/person/person.component';
import { ClientPersonNewComponent } from './models/client/client/client-person-new/client-person-new.component';
import { StaffListPatchComponent } from './models/person/staff-list/staff-list-patch/staff-list-patch.component';


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
    StaffListPatchComponent
  ],
  entryComponents: [
    ClientPersonNewComponent,
    StaffListPatchComponent
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
    MatDialogModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    NotAuthGuard,
    UserService,
    ClientService,
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
