import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  subtitle: string;
  deadline: string;
  category: string;
  priority: string;
  workers: Workers[];
}

export interface Workers {
  worker_id: number;
  username: string;
  finished: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private BASE_API_URL = 'http://127.0.0.1:5000/api/tasks';

  constructor(private client: HttpClient) {}

  getOptions() {
    return {
      headers: { 'x-access-tokens': localStorage.getItem('jwt') },
    };
  }

  getTasks(): Observable<any> {
    const options = this.getOptions(); 
    return this.client.get(this.BASE_API_URL, options);
  }

  getTaskById(id: any): Observable<any> {

    const options = this.getOptions(); 

    const url = this.BASE_API_URL + '/' + id;
    return this.client.get(url, options);
  }

  save(task: Task): Observable<any> {
    if (task.id) {
      return this.update(task);
    }
    return this.create(task);
  }

  create(task: Task): Observable<any> {

    const options = this.getOptions(); 
    return this.client.post(this.BASE_API_URL, task, options);
  }

  update(task: Task): Observable<any> {

    const options = this.getOptions(); 
    const url = this.BASE_API_URL + '/' + task.id;
    return this.client.put(url, task, options);
  }

  del(id: any): Observable<any> {
    const options = this.getOptions(); 
    const url = this.BASE_API_URL + '/' + id;
    console.log(url);
    return this.client.delete(url, options);
  }
}
