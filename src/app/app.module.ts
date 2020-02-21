import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CarFormComponent } from './car-form/car-form.component';
import { WorkspaceFormComponent } from './workspace-form/workspace-form.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { TripFormComponent } from './trip-form/trip-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';
import { WorkspaceInviteComponent } from './workspace-invite/workspace-invite.component';
import { CarListComponent } from './car-list/car-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    CarFormComponent,
    WorkspaceFormComponent,
    ReviewFormComponent,
    TripFormComponent,
    NavbarComponent,
    AboutComponent,
    WorkspaceListComponent,
    WorkspaceInviteComponent,
    CarListComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
