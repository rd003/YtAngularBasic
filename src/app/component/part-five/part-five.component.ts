import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-part-five',
  templateUrl: './part-five.component.html',
  styleUrls: ['./part-five.component.css']
})
export class PartFiveComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  students:Student[]= [
    {id:2,name:'john',age:16},
    {id:2,name:'max',age:14},
    {id:3,name:'mike',age:15},
    {id:4,name:'jason',age:14},
  ]

  selectedStuent!:Student;

  onSelectingStudent(data:Student){
   this.selectedStuent=data;
  }

}
