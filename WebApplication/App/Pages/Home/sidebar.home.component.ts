import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import * as _ue from '../../BusinessLogic/Entities/User';
import * as _ne from '../../BusinessLogic/Entities/Note';
import * as _nc from '../../BusinessLogic/Controllers/NoteController';
import * as _h from '../../BusinessLogic/Helpers';

interface jQuery {
    modal(options: any): JQuery;
}

@Component({
    selector: 'sidebar-home',
    template: `
        <div class="row">
            <div class="col d-flex justify-content-between">
                <h2 class="d-flex align-items-center">Map Sidebar</h2>
                <div class="justify-content-end"><button type="button" class="btn btn-secondary btn-sm" (click)="toggleModalForm()">+</button></div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <form (ngSubmit)="noteSearch($event)">
                    <div class="form-group">
                        <label for="searchText">Note Search</label>
                        <input type="text" name="searchText" id="searchText" aria-describedby="searchHelp" class="form-control" [(ngModel)]="searchText" />
                        <small id="searchHelp" class="form-text text-muted">The search term can be all or part of a username or note text</small>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Search</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="list-group">
                  <a *ngFor="let note of notes; let i = index" (click)="selectNote($event, note, i)" class="list-group-item list-group-item-action">
                    {{note.Text}}
                  </a>
                </div>
            </div>
        </div>
        <div class="modal" tabindex="-1" role="dialog" [ngStyle]="modalStyle">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Note</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="toggleModalForm()">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="noteText">Note Text</label>
                        <input type="text" name="noteText" id="noteText" class="form-control" [(ngModel)]="noteText" />
                    </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="saveNote()">Save Note</button>
              </div>
            </div>
          </div>
        </div>
    `
})

export class SidebarHomeComponent implements OnInit {
    @Output() noteSelected = new EventEmitter<_ne.TigerSpike.Test.BusinessLogic.Entities.Note>();
    @Input() user: _ue.TigerSpike.Test.BusinessLogic.Entities.User;

    notes: Array<_ne.TigerSpike.Test.BusinessLogic.Entities.Note>;
    selectedIndex: number | null;
    searchText: string;
    modalStyle: {};
    modalVisible: boolean;
    noteText: string;

    constructor(
        private noteController: _nc.TigerSpike.Test.BusinessLogic.Controllers.NoteController,
        private helpers: _h.TigerSpike.Test.BusinessLogic.Helpers
    ) {
        this.notes = new Array<_ne.TigerSpike.Test.BusinessLogic.Entities.Note>();
        this.selectedIndex = null;
        this.searchText = '';
        this.modalVisible = false;
        this.noteText = '';
    }

    private updateStyle(): void {
        this.modalStyle = {
            display: this.modalVisible ? 'block' : 'none'
        };
    }

    saveNote(): void {
        if (this.noteText != '') {
            let noteToSave = new _ne.TigerSpike.Test.BusinessLogic.Entities.Note();
            noteToSave.Username = this.user.Username;
            noteToSave.Location = this.helpers.CloneAsObject(this.user.Location);
            noteToSave.Text = this.noteText;
            this.noteController.Insert(noteToSave, (note: _ne.TigerSpike.Test.BusinessLogic.Entities.Note) => {
                this.user.Notes.push(note);
                this.notes.push(note);
                this.noteText = '';
                this.toggleModalForm();
            });
        }
    }

    noteSearch($event) {
        this.noteController.GetBySearchTerm(this.searchText, (_notes: Array<_ne.TigerSpike.Test.BusinessLogic.Entities.Note>) => {
            this.notes = _notes;
        });
    }

    selectNote($event: Event, note: _ne.TigerSpike.Test.BusinessLogic.Entities.Note, i: number): void {
        $event.preventDefault();
        this.noteSelected.emit(note);
        this.selectedIndex = i;
    }

    toggleModalForm(): void {
        this.modalVisible = !this.modalVisible;
        this.updateStyle();
    }



    ngOnInit(): void {
        this.searchText = this.user.Username;
        this.noteController.GetByUsername(this.user.Username, (_notes: Array<_ne.TigerSpike.Test.BusinessLogic.Entities.Note>) => {
            this.user.Notes = _notes;
            this.notes = _notes;
        });
        this.updateStyle();
    }
}