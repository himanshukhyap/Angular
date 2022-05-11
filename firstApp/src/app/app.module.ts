import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { environment } from "../environments/environment";
import { initializeApp } from "firebase/app";
import { AboutPageComponent } from './about-page/about-page.component';
initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
