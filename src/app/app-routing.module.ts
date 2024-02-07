import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'login',
    component: UserLoginComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },{
    path:'',
    component:UserDashboardComponent,
    children:[
    {
      path:'profile',
      component:UserProfileComponent
    }]
  },{
    path:'*',
    component:UserLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
