import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ToastController} from '@ionic/angular';
import { Task, TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {

  @Input() task: Task = {
    id: null,
    title: '',
    subtitle: '',
    deadline: '',
    category: 'Otros',
    priority: 'Importante',
    workers: [],
  };

  private today: string = '2022-01-01';
  private dateString: string = ""

  constructor(private service: TaskService, private router: Router,
             private toast: ToastController) {}

  ngOnInit() {
    if (!this.task.id) {
      this.today = new Date().toISOString().split('T')[0];
      const hoy = new Date(); 
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      this.task.deadline = this.today;
      const userId = parseInt(localStorage.getItem('userId'));
      const username = localStorage.getItem('username');
      this.task.workers = [
        { worker_id: userId, username: username, finished: false },
      ];
    }
  }

  save() {
    if(this.task.title === ""){ 
      this.presentToast("El titulo no puede estar vacio") 
      return;
    }
    if(this.task.subtitle === ""){ 
      this.presentToast("El subtitulo no puede estar vacio") 
      return;
    }
    this.service.save(this.task).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['tasks']);
  }
  async presentToast(msg:string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  

  setTitle(event: CustomEvent) {
    this.task.title = event.detail.value;
  }

  setSubtitle(event: CustomEvent) {
    this.task.subtitle = event.detail.value;
  }

  setDate(event: CustomEvent) {
    this.task.deadline = event.detail.value;
  }

  setCategory(event: CustomEvent) {
    this.task.category = event.detail.value;
  }

  setPriority(event: any) {
    this.task.priority = event.detail.value;
  }
}
