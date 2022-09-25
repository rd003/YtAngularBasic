import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  studentForm!:FormGroup;
  isSubmitted=false;
  get f(){
    return this.studentForm.controls;
  }

  constructor(private fb:FormBuilder) { }

  onPost(){
    this.isSubmitted=true;
  }

  ngOnInit(): void {
    this.studentForm=this.fb.group({
      'id': [0,Validators.required],
      'name': ['',Validators.required],
      'age': [0,Validators.required],
    })
  }

}
