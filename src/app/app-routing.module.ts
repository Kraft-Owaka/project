import { WorkspaceFormComponent } from './workspace-form/workspace-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';
import { WorkspaceInviteComponent } from './workspace-invite/workspace-invite.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarListComponent } from './car-list/car-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path :"", component: LandingPageComponent},
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'login', component: LoginFormComponent},
  {path: 'workspace', component:WorkspaceFormComponent},
  {path:'workspaces', component:WorkspaceListComponent},
  {path:'workspace/:public_id', component:WorkspaceInviteComponent},
  {path:'car/:public_id', component:CarFormComponent},
  {path:'view/:public_id', component:CarListComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
