import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-part-five',
  templateUrl: './part-five.component.html',
  styleUrls: ['./part-five.component.css']
})
export class PartFiveComponent implements OnInit {

  students!:Student[];
  selectedStuent!:Student;

  constructor(private studentService:StudentService) { }

  private getStudents(){
    this.studentService.getStudents().subscribe({
      next:(data)=>{
            this.students=data;
      },
      error:(err)=>console.log(err)
    })
  }

  ngOnInit(): void {
    this.getStudents();
  }


  onSelectingStudent(data:Student){
   this.selectedStuent=data;
  }

}
