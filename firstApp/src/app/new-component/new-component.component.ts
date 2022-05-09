import { Component, OnInit } from '@angular/core';

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
}
