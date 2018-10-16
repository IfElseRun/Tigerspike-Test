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
const _uc = require("../../BusinessLogic/Controllers/UserController");
const _nc = require("../../BusinessLogic/Controllers/NoteController");
let SidebarHomeComponent = class SidebarHomeComponent {
    constructor(noteController) {
        this.noteController = noteController;
        this.noteSelected = new core_1.EventEmitter();
        this.openModal = new core_1.EventEmitter();
        this.notes = new Array();
        this.selectedIndex = null;
        this.searchText = '';
        this.modalVisible = false;
    }
    updateStyle() {
        this.modalStyle = {
            display: this.modalVisible ? 'block' : 'none'
        };
    }
    noteSearch($event) {
        this.noteController.GetBySearchTerm(this.searchText, (notes) => {
            this.notes = notes;
        });
    }
    selectNote(note, i) {
        this.noteSelected.emit(note);
        this.selectedIndex = i;
    }
    toggleModalForm() {
        this.modalVisible = !this.modalVisible;
        this.updateStyle();
    }
    ngOnInit() {
        this.user = _uc.TigerSpike.Test.BusinessLogic.Controllers.UserController.GetLoggedOnUser();
        this.searchText = this.user.Username;
        this.updateStyle();
        this.noteController.GetAll((notes) => {
            this.notes = notes;
        });
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SidebarHomeComponent.prototype, "noteSelected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SidebarHomeComponent.prototype, "openModal", void 0);
SidebarHomeComponent = __decorate([
    core_1.Component({
        selector: 'sidebar-home',
        template: `
        <h2>Map Sidebar <button type="button" class="btn btn-primary" (click)="toggleModalForm()">+</button></h2>
        <div>
            <form (ngSubmit)="noteSearch($event)">
                <input type="text" name="searchText" class="form-control" [(ngModel)]="searchText" />
                <button class="btn btn-lg btn-primary btn-block" type="submit">Search</button>
            </form>
        </div>
        <div class="list-group">
          <a *ngFor="let note of notes; let i = index" (ngClick)="selectNote(note, i)" href="#" class="list-group-item list-group-item-action">
            {{note.Text}}
          </a>
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
                New note form here
              </div>
            </div>
          </div>
        </div>
    `
    }),
    __metadata("design:paramtypes", [_nc.TigerSpike.Test.BusinessLogic.Controllers.NoteController])
], SidebarHomeComponent);
exports.SidebarHomeComponent = SidebarHomeComponent;
//# sourceMappingURL=sidebar.home.component.js.map