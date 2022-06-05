import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos:Todo[];



  constructor(private todoService:TodoService){}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(data=>{
      this.todos=data
    })
  }

}
