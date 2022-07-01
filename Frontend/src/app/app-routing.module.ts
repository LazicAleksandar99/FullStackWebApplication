import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './components/user/application/application.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'', redirectTo:'/user/login',pathMatch:'full'},
  {
    path:'user', component: UserComponent,
    children:[
      { path: 'login', component: LoginComponent},
      { path: 'registration', component: RegistrationComponent},
      { path: 'application', component: ApplicationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }