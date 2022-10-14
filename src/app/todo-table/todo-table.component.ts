import {Component, Injectable, OnInit} from '@angular/core';
import {Todo} from "../model/todoInterface";
import {TodoArray} from "../model/todoListInterface";
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})

export class TodoTableComponent implements OnInit {

  todoArray : TodoArray | null | undefined;

  id : number = 0;
  description : string = '';
  summary : string = '';

  constructor(private service : CrudService) { }

  ngOnInit(): void {
  }

  refresh() {
    this.service.getAllTodo().subscribe(res => {
      this.todoArray = res;
    }, err => {
      alert(err);
    });
  }

  addTodo() {
    let todo = {
      id: this.id,
      description: this.description,
      summary: this.summary
    };
    this.service.addTodo(todo).subscribe(res => {
    }, err => {
      alert(err);
    })
  }

  delete(todo : Todo) {
    this.service.deleteTodo(todo).subscribe(res => {
      this.refresh();
    }, err=> {
      alert("Failed to delete todo");
    });
  }
}

