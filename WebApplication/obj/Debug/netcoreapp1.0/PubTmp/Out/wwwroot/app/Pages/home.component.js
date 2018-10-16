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
let HomeComponent = class HomeComponent {
    constructor() {
        this.selectedNote = null;
    }
    updateNoteMarker(note) {
        this.selectedNote = note;
    }
    ngOnInit() {
        this.user = _uc.TigerSpike.Test.BusinessLogic.Controllers.UserController.GetLoggedOnUser();
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
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: `
        <sidebar-home (noteSelected)="updateNoteMarker(note)" (openModal)="openModal()"></sidebar-home>
        <agm-map *ngIf="user.Location" [latitude]="user.Location.coords.latitude" [longitude]="user.Location.coords.longitude">
            <agm-marker [latitude]="user.Location.coords.latitude" [longitude]="user.Location.coords.longitude"></agm-marker>
            <agm-marker *ngIf="selectedNote != null" [latitude]="selectedNote.Location.coords.latitude" [longitude]="selectedNote.Location.coords.longitude"></agm-marker>
        </agm-map>
    `
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map