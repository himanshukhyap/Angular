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
  isValid:boolean=true
  click(){
    this.isValid=!this.isValid;
  }
  selectednum:string=""
  getvalue(event:any, selectvalue:any){
    console.log(event.target.value)
    console.log(selectvalue.value)
    this.selectednum = selectvalue.value;
  }
   cars = ["Saab", "Volvo", "BMW"];
 
 }

