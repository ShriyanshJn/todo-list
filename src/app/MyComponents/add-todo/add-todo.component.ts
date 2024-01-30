import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit {

  title!: string
  desc!: string

  //* sending data to parent component which holds the todo list
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    //* on submission of form I want to send data (emit data) to the parent component which holds the list of todos so we use @Output directive
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo)
  }
}
