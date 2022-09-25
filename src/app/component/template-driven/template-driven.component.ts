import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  
  student:Student={id:0,name:'',age:0};
  isSubmitted=false;

  onPost(){
    this.isSubmitted=true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
