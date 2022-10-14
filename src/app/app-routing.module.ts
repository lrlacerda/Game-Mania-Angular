import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ContatoComponent } from './views/contato/contato.component';



const routes: Routes = [
  {path:"", component: HomeComponent },
  {path:"login", component: LoginComponent},
  {path:"contato", component: ContatoComponent},

]

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports:[RouterModule]
})

export class AppRoutingModule { }
