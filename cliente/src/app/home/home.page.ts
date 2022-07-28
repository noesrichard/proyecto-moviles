import { Component } from '@angular/core';
import { Task, TaskService } from '../services/task/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private tasks: Task[];
  private date: string; 

  constructor(private service: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  ionViewDidEnter(){ 
    this.getTasks(); 
  }

  getTasks() {
    this.service.getTasks().subscribe((res) => {
      this.tasks = res;
    });
  }

  refresh(ev) {
    setTimeout(() => {
      this.getTasks();
      ev.detail.complete();
    }, 300);
  }
}
