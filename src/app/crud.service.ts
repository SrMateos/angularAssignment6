import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from "./model/todoInterface";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url : string ;

  constructor(private http : HttpClient) {
    this.url = "/todos"
  }

  addTodo(todo : Todo) : Observable<Todo> {
    return this.http.post<Todo>(this.url, todo);
  }

  getAllTodo() : Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  deleteTodo(todo : Todo) : Observable<Todo> {
    return this.http.delete<Todo>(this.url + '/' + todo.id);
  }

}
