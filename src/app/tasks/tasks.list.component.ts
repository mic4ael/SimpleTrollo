import { Component, Input } from '@angular/core';
import { Task } from './models/task';

@Component({
    selector: 'tasks-list-component',
    templateUrl: './tasks.list.component.html',
    styleUrls: ['./tasks.list.component.css']
})
export class TasksListComponent {
    id: Number;

    @Input()
    name: string;

    tasks: Task[];

    constructor() {
        this.id = Math.floor(Math.random() * 100);
        this.tasks = [];
    }

    private addNewTask(title: string, description: string): void {
        if (title && description) {
            this.tasks.push(new Task(title, description));
        }
    }
}