import { Component, Input } from '@angular/core';
import { Task } from './models/task';

@Component({
    selector: 'task-component',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent {
    @Input()
    task: Task;
}