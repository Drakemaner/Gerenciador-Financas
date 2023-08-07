import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as path from "path";
import {AppComponent} from "./app.component";
import {MainComponent} from "./Componentes/main/main.component";


const routes: Routes  = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

