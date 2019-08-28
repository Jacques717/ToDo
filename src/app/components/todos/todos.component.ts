import { Todo } from "./../../models/Todo";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor() {}

  ngOnInit() {
    for (let x = 0; x < 5; x++) {
      let todo = new Todo(x, `Title ${x}`, new Date(), x, false);
      this.todos.push(todo);
    }

    this.todos.map(n => {
      if (n.id == 3) n.completed = true;
    });
  }
}
