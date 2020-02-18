import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CarFormComponent } from './car-form/car-form.component';
import { WorkspaceFormComponent } from './workspace-form/workspace-form.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { TripFormComponent } from './trip-form/trip-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    CarFormComponent,
    WorkspaceFormComponent,
    ReviewFormComponent,
    TripFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
