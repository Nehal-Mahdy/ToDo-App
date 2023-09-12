import { Component } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent {
todos: Todo[]=[];

//recieved from form component
recievedFromChild(newTodo : string){
  let todo = new Todo();
  todo.name= newTodo;
  todo.isCompleted=true;
  this.todos.push(todo);
}
//removed by todolist component 
removedFromchild(index : number){
  this.todos = this.todos.filter((v, i) => i !== index);
}

}
