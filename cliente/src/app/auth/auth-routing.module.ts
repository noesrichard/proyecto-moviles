import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import {SignupComponent} from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  }, 
  {
    path: 'signup',
    component: SignupComponent
  }, 
  { 
    path: 'auht', 
    component: AuthPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
