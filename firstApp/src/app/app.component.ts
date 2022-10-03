
import { Component, OnInit } from '@angular/core';
import { environment } from "../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputdata:any;
  title = "Welcome to First Angular App";
 
  getusername=(username:any)=>{
    return username
  }

  getinput=(event:any)=>{
    this.inputdata = event.target.value;
  }
  getinputbyID=(value:any)=>{
    this.inputdata = value
  }

 
}
