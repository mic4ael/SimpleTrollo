import { Component, Input } from '@angular/core';
import { Task } from './models/task';
import { TasksService } from './services/tasks.service';

@Component({
    selector: 'tasks-list-component',
    templateUrl: './tasks.list.component.html',
    styleUrls: ['./tasks.list.component.css']
})
export class TasksListComponent {
    id: Number;
    tasksService: TasksService;

    @Input()
    name: string;

    tasks: Task[];

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
        this.id = Math.floor(Math.random() * 100);
        this.tasks = [];
    }

    private addNewTask(title: string, description: string, color: string): void {
        if (title && description) {
            this.tasks.push(this.tasksService.createNewTask(title, description, color));
        }
    }
}