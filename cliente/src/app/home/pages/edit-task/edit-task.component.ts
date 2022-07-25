import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Task, TaskService} from "../../../services/task/task.service";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {


  private task: Task = {
    id: null,
    title: "Tarea",
    subtitle: "Subtitulo",
    deadline: "2022-01-01",
    category: "house",
    priority: "low",
    workers: [],
  };

  private today: string = "2022-01-01"


  private id;

  constructor(private service: TaskService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getTaskById(this.id).subscribe(res => {
      this.task = res
      console.log(this.task)
    });
    this.today = (new Date()).toISOString().split('T')[0];
  }


  save() {
    this.service.update(this.task).subscribe(res => {
      console.log(this.task)
    })
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

  setPriority(event: CustomEvent) {
    this.task.priority = event.detail.value;
  }

}
