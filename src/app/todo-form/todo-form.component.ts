import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  @Input() todoList: any;
  @Output() newItemEvent = new EventEmitter();

  newTodo: string;

saveTodo(newTodo: string){
  if(newTodo){

    this.newItemEvent.emit(newTodo)
    this.newTodo="";
  }else{
    alert("please Enter Todo")
  }
}
}
