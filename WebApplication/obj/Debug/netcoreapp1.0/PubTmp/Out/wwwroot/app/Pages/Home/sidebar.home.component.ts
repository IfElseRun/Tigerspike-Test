import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as _ue from '../../BusinessLogic/Entities/User';
import * as _ne from '../../BusinessLogic/Entities/Note';
import * as _uc from '../../BusinessLogic/Controllers/UserController';

@Component({
    selector: 'sidebar-home',
    inputs: ['loggedOnUser'],
    template: `
        <h2>Map Sidebar</h2>
        <div>
            <form (ngSubmit)="noteSearch()">
                <input type="text" name="search" ([ngModel])="searchText" />
                <button class="btn btn-lg btn-primary btn-block" type="submit">Search</button>
            </form>
        </div>
        <div class="list-group">
          <a *ngFor="let note of notes; let i = index" (ngClick)="selectNote(note, i)" href="#" class="list-group-item list-group-item-action">
            {{note.Text}}
          </a>
        </div>
    `
})

export class SidebarHomeComponent implements OnInit {
    @Output() noteSelected = new EventEmitter();

    notes: Array<_ne.TigerSpike.Test.BusinessLogic.Entities.Note>;
    selectedIndex: number | null;

    constructor() {
        this.notes = new Array<_ne.TigerSpike.Test.BusinessLogic.Entities.Note>();
        this.selectedIndex = null;
    }

    noteSearch() {

    }

    selectNote(note: _ne.TigerSpike.Test.BusinessLogic.Entities.Note, i: number) {
        this.noteSelected.emit(note);
        this.selectedIndex = i;
    }

    ngOnInit() {

    }
}