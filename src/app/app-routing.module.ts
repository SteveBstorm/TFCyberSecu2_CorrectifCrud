import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanlistComponent } from './components/fanlist/fanlist.component';
import { AddfanComponent } from './components/addfan/addfan.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path : 'listfan', component : FanlistComponent},
  {path : 'addfan', component : AddfanComponent},
  {path : 'login', component : LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
