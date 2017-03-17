import { Injectable } from '@angular/core';

import { Task } from '../models/task';


@Injectable()
export class TasksService {
    public createNewTask(title: string, description: string, color: string): Task {
        let task = new Task(title, description, color);
        return task;
    }
}