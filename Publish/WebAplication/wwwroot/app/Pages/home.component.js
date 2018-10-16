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
const _uc = require("../BusinessLogic/Controllers/UserController");
const _bh = require("../BusinessLogic/Helpers/Broadcaster");
let HomeComponent = class HomeComponent {
    constructor(userController, broadcaster) {
        this.userController = userController;
        this.broadcaster = broadcaster;
        this.selectedNote = null;
        this.user = null;
        this.showSidebar = false;
    }
    updateNoteMarker($event) {
        this.selectedNote = $event;
    }
    ngOnInit() {
        this.user = this.userController.GetLoggedOnUser();
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition((position) => {
                this.user.Location = position;
                console.log(position);
            }, (error) => {
                this.user.Location = {
                    coords: {
                        accuracy: 0,
                        altitude: null,
                        altitudeAccuracy: null,
                        heading: null,
                        speed: null,
                        latitude: 40.730610,
                        longitude: -73.935242
                    },
                    timestamp: 0
                };
            });
        }
        ;
        this.broadcaster.on('SidebarToggle').subscribe(showSidebar => {
            this.showSidebar = showSidebar;
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HomeComponent.prototype, "showSidebar", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: `
        <sidebar-home (noteSelected)="updateNoteMarker($event)" (openModal)="openModal()" [user]="user" [ngClass]="{'visible':showSidebar}"></sidebar-home>
        <agm-map *ngIf="user.Location" [latitude]="user.Location.coords.latitude" [longitude]="user.Location.coords.longitude">
            <agm-marker [latitude]="user.Location.coords.latitude" [longitude]="user.Location.coords.longitude"></agm-marker>
            <agm-marker *ngIf="selectedNote != null" [latitude]="selectedNote.Location.coords.latitude" [longitude]="selectedNote.Location.coords.longitude">
                <agm-info-window [isOpen]="true">{{selectedNote.Text}}</agm-info-window>
            </agm-marker>
        </agm-map>
    `
    }),
    __metadata("design:paramtypes", [_uc.TigerSpike.Test.BusinessLogic.Controllers.UserController, _bh.TigerSpike.Test.BusinessLogic.Helpers.Broadcaster])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map