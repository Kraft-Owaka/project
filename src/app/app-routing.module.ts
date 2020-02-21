import { WorkspaceFormComponent } from './workspace-form/workspace-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'login', component: LoginFormComponent},
  {path: 'workspace', component:WorkspaceFormComponent},
  {path:'workspaces', component:WorkspaceListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
