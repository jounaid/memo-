import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task} from 'src/app/models/task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  searchText = ''
  showForm = false
  editForm = false
  tasks: Task[] = [];
  ResultTasks: Task[] = [];
  myTask: Task = {
    label:'',
    isCompleted: false
  }
  constructor(private tService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }
  getTasks(){
    this.tService.findAll()
    .subscribe(tasks =>
       this.ResultTasks=this.tasks=tasks) 
  }
  deleteTask(id){
    this.tService.delete(id)
    .subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id != id)
    })
  }
  persistTask(){
    this.tService.persist(this.myTask)
    .subscribe((task) =>{
      this.tasks = [task, ...this.tasks];
      this.resetTask();
      this.showForm = false;
    })
  }
  resetTask(){
    this.myTask= {
      label:'',
      isCompleted: false
    }
  }
  toggelIsCompleted(task){
    this.tService.isCompleted(task.id, task.isCompleted)
    .subscribe(() =>{
      task.isCompleted = !task.isCompleted 
    })
  }
  editTask(task){
    this.myTask = task
    this.editForm = true;
  }
   updateTask(){
    this.tService.update(this.myTask).subscribe(
      task =>{
        this.resetTask();
        this.editForm = false
      })
   }
   searchTask(){
     this.ResultTasks = this.tasks.filter(task => task.label.toLowerCase().includes(this.searchText.toLowerCase())) 
   }
}
