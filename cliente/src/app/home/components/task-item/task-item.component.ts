import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Task, TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;

  private priorityColor: string = 'danger';
  private categoryColor: string = 'success';

  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor(private service: TaskService, private alert: AlertController) {}

  ngOnInit() {
    this.priorityColor = this.getPriorityColor(this.task);
    this.categoryColor = this.getCategoryColor(this.task);
  }

  delete() {
    this.alert.create({
      header: 'Confirme la eliminacion',
      message: '¿Esta seguro de eliminar la tarea?',
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            this.service.del(this.task.id).subscribe((res) => {
              console.log(res);
            });
            this.onDelete.emit(true);
          },
        },
        'Cancelar',
      ],
    }).then(alert => alert.present());
  }

  getPriorityColor(task: Task) {
    switch (task.priority) {
      case 'Importante':
        return 'warning';
      case 'Poco Importante':
        return 'primary';
      default:
        return 'danger';
    }
  }

  getCategoryColor(task: Task) {
    switch (task.category) {
      case 'Hogar':
        return 'warning';
      case 'Trabajo':
        return 'primary';
      case 'Otros':
        return 'secondary';
      case 'Educacion':
        return 'danger';
      default:
        return 'warning';
    }
  }
}
