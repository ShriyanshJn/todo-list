import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  //* in TS we use variable:type
  todos: Todo[] = [];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "Title 1",
        desc: "Desc 1",
        active: true
      },
      {
        sno: 2,
        title: "Title 2",
        desc: "Desc 2",
        active: false
      },
      {
        sno: 3,
        title: "Title 3",
        desc: "Desc 3",
        active: true
      }
    ]
  }
  ngOnInit(): void {

  }

  DeleteTheTodo(todo: Todo) {
    console.log(todo.title)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
  }

  AddTheTodo(todo: Todo) {
    console.log(todo.title)
    this.todos.push(todo)
  }
}
