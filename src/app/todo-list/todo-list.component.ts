import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
@Input () addedTodo : any;
@Input() todoIndex : any;
@Input() todoList : any;

@Output() removeEvent = new EventEmitter();


done(id: number){
  this.todoList[id].isCompleted= !this.todoList[id].isCompleted;
}

removeTodo( todoIndex: number){
  this.removeEvent.emit(todoIndex);
} 
}