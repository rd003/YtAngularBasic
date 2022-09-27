import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
   txtTodo:string="";
   toDos:Todo[]=[];
  constructor() { }

  ngOnInit(): void {
    this.getToDos();
  }

  private getToDos(){
    var obj:Todo[]=[];
    var data= localStorage.getItem("todoItems");
    if(data){
      obj=JSON.parse(data);
      this.toDos=obj;
    }
    return obj;
  }
  
  private updateLocalStorage(){
    localStorage.setItem('todoItems',JSON.stringify(this.toDos));
  }

  save(){
    if(this.txtTodo.length>0){
      this.toDos=this.getToDos();
      var id= Date.now().toString(36)+Math.random().toString(36).substring(2);
      var todo:Todo = {id:id,item:this.txtTodo,isChecked:false};
      this.toDos.push(todo);
      this.txtTodo='';
      this.updateLocalStorage();
    }
  }
  
  updateTaskCompletion(obj:Todo){
    let index= this.toDos.findIndex(a=>a.id==obj.id);
    this.toDos[index]=obj;
    this.updateLocalStorage();
  }

  delete(id:string){
    if(window.confirm('Are you sure??')){
      let index= this.toDos.findIndex(a=>a.id==id);
      this.toDos.splice(index,1);
      this.updateLocalStorage();
    }
  }

}
