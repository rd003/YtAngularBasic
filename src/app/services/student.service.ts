import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url="https://localhost:44309/api/student/getall";

  getStudents(){
    return this.httpClient.get<Student[]>(this.url);
  }

  constructor(private httpClient:HttpClient) { }
}
