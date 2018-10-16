"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const _ue = require("../../BusinessLogic/Entities/User");
const _ne = require("../../BusinessLogic/Entities/Note");
const _nc = require("../../BusinessLogic/Controllers/NoteController");
const _h = require("../../BusinessLogic/Helpers");
let SidebarHomeComponent = class SidebarHomeComponent {
    constructor(noteController, helpers) {
        this.noteController = noteController;
        this.helpers = helpers;
        this.noteSelected = new core_1.EventEmitter();
        this.notes = new Array();
        this.selectedIndex = null;
        this.searchText = '';
        this.modalVisible = false;
        this.noteText = '';
    }
    updateStyle() {
        this.modalStyle = {
            display: this.modalVisible ? 'block' : 'none'
        };
    }
    saveNote() {
        if (this.noteText != '') {
            let noteToSave = new _ne.TigerSpike.Test.BusinessLogic.Entities.Note();
            noteToSave.Username = this.user.Username;
            noteToSave.Location = this.helpers.CloneAsObject(this.user.Location);
            noteToSave.Text = this.noteText;
            this.noteController.Insert(noteToSave, (note) => {
                this.user.Notes.push(note);
                this.notes.push(note);
                this.noteText = '';
                this.toggleModalForm();
            });
        }
    }
    noteSearch($event) {
        this.noteController.GetBySearchTerm(this.searchText, (_notes) => {
            this.notes = _notes;
        });
    }
    selectNote($event, note, i) {
        $event.preventDefault();
        this.noteSelected.emit(note);
        this.selectedIndex = i;
    }
    toggleModalForm() {
        this.modalVisible = !this.modalVisible;
        this.updateStyle();
    }
    ngOnInit() {
        this.searchText = this.user.Username;
        this.noteController.GetByUsername(this.user.Username, (_notes) => {
            this.user.Notes = _notes;
            this.notes = _notes;
        });
        this.updateStyle();
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SidebarHomeComponent.prototype, "noteSelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", _ue.TigerSpike.Test.BusinessLogic.Entities.User)
], SidebarHomeComponent.prototype, "user", void 0);
SidebarHomeComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [_nc.TigerSpike.Test.BusinessLogic.Controllers.NoteController, _h.TigerSpike.Test.BusinessLogic.Helpers])
], SidebarHomeComponent);
exports.SidebarHomeComponent = SidebarHomeComponent;
//# sourceMappingURL=sidebar.home.component.js.map