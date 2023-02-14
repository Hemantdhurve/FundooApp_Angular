import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenotesComponent } from './components/createnotes/createnotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { IconsComponent } from './components/icons/icons.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'getallnotes',component:GetallnotesComponent},
    {path:'displaynotes',component:DisplaynotesComponent},
    {path:'createnotes',component:CreatenotesComponent},
  ]
},
{path:'icons',component:IconsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
