import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from 'src/Component/about/about.component';
import { AfterloginModule } from 'src/Component/afterlogin/afterlogin.module';

@NgModule({
  declarations: [
    AppComponent,AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    AfterloginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
