import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BoardComponent } from './board/board.component';
import { BoardService } from './board/services/board.service';

import { TasksService } from './tasks/services/tasks.service';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [BoardService, TasksService],
    bootstrap: [AppComponent, BoardComponent]
})
export class AppModule {}
