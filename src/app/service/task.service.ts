import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  api = ""
  apiUrl = "http://localhost:3000/tasks"
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Task[]>(this.apiUrl);
  }

  delete(id){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  persist(task){
    return this.http.post<Task>(this.apiUrl, task);
  }
  isCompleted(id,isCompleted){
   return this.http.patch(`${this.apiUrl}/${id}`,{isCompleted: !isCompleted});
  }
  update(task){
    return this.http.put(`${this.apiUrl}/${task.id}`,task );
  }
}
