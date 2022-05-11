import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';

const routes: Routes = [
  {path:"", component: AppComponent},
  {path:"NewComponent", component:NewComponentComponent},
  {path:"about", component:AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
