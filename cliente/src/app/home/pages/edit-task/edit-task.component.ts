import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, TaskService } from '../../../services/task/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  private task: Task = { 
    id: null,
    title: '',
    subtitle: '',
    deadline: '',
    category: 'house',
    priority: 'high',
    workers: [],
  };

  constructor(private service: TaskService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getTaskById(id).subscribe((res) => {
      this.task = res;
    });
  }
}
