import { Component, OnInit } from '@angular/core';
import { Board } from './board/models/board';

@Component({
    selector: 'simple-trollo-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    currentBoard: Board;

    public ngOnInit() {
        this.currentBoard = new Board();
    }
}
