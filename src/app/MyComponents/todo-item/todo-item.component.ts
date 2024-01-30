import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {

  //* The Input() decorator helps us to specify the param which will be passed to the component in another file, here it's passed in todos component html file
  //* The Input() decorator helps us to pass data from parent -> child
  @Input() todo!: Todo;

  //* The Output() decorator helps us to pass data from child -> parent
  //* Here, we want to pass the todo from the child to parent as we have access of todo-list in the parent component
  //* @Output() eventName = new EventEmitter<Type>();
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()
  //? The emitted event can be listened to by the parent component through the use of the @Input() decorator

  constructor() { }
  ngOnInit(): void {

  }

  onClick(todo: Todo) {
    //* The sending of an event is done through the EventEmitter.emit() method
    this.todoDelete.emit(todo)
  }
}
