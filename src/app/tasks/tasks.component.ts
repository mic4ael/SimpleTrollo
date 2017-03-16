import { Component, Input } from '@angular/core';
import { Task } from './models/task';

@Component({
    selector: 'tasks-component',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
    @Input()
    task: Task;
}