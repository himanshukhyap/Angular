import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  inputvalue:string="input Value method"
  IsActive:boolean = true
  constructor() { 
   
  }

  ngOnInit(): void {
    
  }
  title:string = "new Comonent"
  myfun(){
    return "myfun calling "+this.title+" from new Comopnent"
  }

  getinfo(e:any){
    console.log(e.value)

  }
  getinfo1(event:any){
    console.log(event)   

  }
  input2:string=""

  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  firebaseConfig = {
//   apiKey: "AIzaSyAQv7D7-MT24rTmdArpOz10LfQ2vKeBmKA",
//   authDomain: "demofilebase-a876e.firebaseapp.com",
//   projectId: "demofilebase-a876e",
//   storageBucket: "demofilebase-a876e.appspot.com",
//   messagingSenderId: "93515060687",
//   appId: "1:93515060687:web:e7c78856267518c66b2eba",
//   measurementId: "G-2TV60GD5Q1"
// };

// // Initialize Firebase
//  app = initializeApp(this.firebaseConfig);
//  analytics = getAnalytics(this.app);
 }

