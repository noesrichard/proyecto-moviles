import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {CreateTaskComponent} from './pages/create-task/create-task.component';
import {EditTaskComponent} from './pages/edit-task/edit-task.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'create',
    component: CreateTaskComponent,
  },
  {
    path: ':id',
    component: EditTaskComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
