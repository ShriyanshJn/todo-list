import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  //* in TS we use variable:type
  localItem: any
  todos: Todo[] = [];

  constructor() {
    this.localItem = localStorage.getItem("todos")
    if (this.localItem == null) {
      this.todos = []
    } else {
      this.todos = JSON.parse(this.localItem)
    }
  }
  ngOnInit(): void {

  }

  DeleteTheTodo(todo: Todo) {
    console.log(todo.title)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  AddTheTodo(todo: Todo) {
    console.log(todo.title)
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  ToggleTodo(todo: Todo) {
    console.log(todo.title)
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
