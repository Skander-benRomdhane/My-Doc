import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // this will be used for two ways binding if needed;
import { ProfileService } from './services/profile.service';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './PatientComponents/home-page/home-page.component';

import { LogInComponent } from './PatientComponents/log-in/log-in.component';
import { ProfilComponent } from './PatientComponents/profil/profil.component';
import { MessagesComponent } from './PatientComponents/messages/messages.component';
import { AdminComponent } from './AdminComponents/admin/admin.component';
import { CitiesComponent } from './PatientComponents/cities/cities.component';

import { HomePageDocComponent } from './DoctorComponents/home-page-doc/home-page-doc.component';
import { MessagesDocComponent } from './DoctorComponents/messages/messages.component';
import { ProfilDocComponent } from './DoctorComponents/profil/profil.component';
import { SingInDocComponent } from './DoctorComponents/sing-in/sing-in.component';
import { SingUpDocComponent } from './DoctorComponents/sing-up/sing-up.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './patientComponents/sign-up/sign-up.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    
    LogInComponent,
    ProfilComponent,
    MessagesComponent,
    AdminComponent,
    CitiesComponent,
    HomePageDocComponent,
    MessagesDocComponent,
    ProfilDocComponent,
    SingInDocComponent,
    SingUpDocComponent,
    NavBarComponent,
    HomeComponent,
    SignUpComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent},
      {path: 'doctor', component:SingUpDocComponent},
      {path: 'patient', component: HomePageComponent}
    ]),
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
