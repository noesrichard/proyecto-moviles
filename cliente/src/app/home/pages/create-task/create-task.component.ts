import { Component, OnInit } from '@angular/core';
import {Task, TaskService} from 'src/app/services/task/task.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
