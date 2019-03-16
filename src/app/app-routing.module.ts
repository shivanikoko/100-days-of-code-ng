import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { KokoComponent } from './koko/koko.component';
import { ShowForComponent } from './show-for/show-for.component';

const routes: Routes = [
  {
    path      : 'signup', 
    component : SignupComponent,
    data      : {'title': 'Sign Up'}, 
  },
  {
    path:'login', 
    component: LoginComponent
  },
  {
    path:'koko', 
    component: KokoComponent
  },
  {
    path      : 'show-for', 
    component : ShowForComponent,
    data      : {'title': ' Show For '}, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
