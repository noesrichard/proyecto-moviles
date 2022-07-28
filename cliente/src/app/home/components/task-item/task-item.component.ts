import { Component, Input, OnInit } from '@angular/core';
import {Task, TaskService} from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;

  private priorityColor:string = "danger"; 
  private categoryColor: string = "success"; 

  constructor(private service: TaskService) { }

  ngOnInit() {
    this.priorityColor = this.getPriorityColor(this.task);
    this.categoryColor = this.getCategoryColor(this.task); 
  }

  delete(){
    this.service.del(this.task.id).subscribe( res => {
      console.log(res)
    } );
  }

  getPriorityColor(task: Task){ 
    switch(task.priority){ 
      case "Importante": return "warning"; 
      case "Poco Importante": return "primary";
      default: return "danger"; 
    }
  }

  getCategoryColor(task: Task){ 
    switch(task.category){ 
      case "Hogar": return "warning"; 
      case "Trabajo": return "primary"; 
      case "Otros": return "secondary"; 
      case "Educacion": return "danger"; 
      default: return "warning"; 
    }
  }

}
