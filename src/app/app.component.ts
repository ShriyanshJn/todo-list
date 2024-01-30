//* This file defines how our module will work

import { Component } from '@angular/core';

@Component({
  //* selector tells us about the html element to which this component belongs
  selector: 'app-root',
  //* templateUrl tells us which template to link with .ts file
  templateUrl: './app.component.html',
  //* styleUrl tells us where to take styling from
  styleUrl: './app.component.css'
})
export class AppComponent {
  //* we use {{}} in html to get variables from js i.e app.component.ts, and as soon as the title changes in .ts file it will automatically change int the html file
  title = 'todo-list';
}
