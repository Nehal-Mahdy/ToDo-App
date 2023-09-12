import { Component } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent {
todos: Todo[]=[];

recievedFromChild(newTodo : string){
  let todo = new Todo();
  todo.name= newTodo;
  todo.isCompleted=true;
  this.todos.push(todo);
}

// done(id: number){
//   this.todos[id].isCompleted= !this.todos[id].isCompleted;
// }

// remove(id: number){
//   this.todos = this.todos.filter((v, i) => i !== id);
// }

removedFromchild(index : number){
  this.todos = this.todos.filter((v, i) => i !== index);
}

}
