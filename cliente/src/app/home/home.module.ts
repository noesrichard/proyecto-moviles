import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import {PriorityPickerComponent} from './components/priority-picker/priority-picker.component';
import {CategoryPickerComponent} from './components/category-picker/category-picker.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    TaskItemComponent,
    CreateTaskComponent,
    EditTaskComponent,
    TaskFormComponent,
    PriorityPickerComponent,
    CategoryPickerComponent,
  ],
})
export class HomePageModule {}
