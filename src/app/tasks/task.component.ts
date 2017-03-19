import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './models/task';

@Component({
    selector: 'task-component',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent {
    @Input()
    task: Task;

    @Output()
    onTaskRemoved = new EventEmitter<Task>();

    removeTask(task: Task): void {
        this.onTaskRemoved.emit(task);
    }
}