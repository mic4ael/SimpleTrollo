import { Component, Input } from '@angular/core';
import { Board } from './models/board';

@Component({
    selector: 'board-component',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent {
    @Input()
    board: Board;
}