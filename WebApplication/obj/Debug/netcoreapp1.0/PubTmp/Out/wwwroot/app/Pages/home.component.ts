import { Component, OnInit } from '@angular/core';
import * as _ue from '../BusinessLogic/Entities/User';
import * as _ne from '../BusinessLogic/Entities/Note';
import * as _uc from '../BusinessLogic/Controllers/UserController';

@Component({
    selector: 'home',
    template: `
        <sidebar-home (noteSelected)="updateNoteMarker(note)"></sidebar-home>
        <agm-map *ngIf="user.Location" [latitude]="user.Location.coords.latitude" [longitude]="user.Location.coords.longitude">
            <agm-marker [latitude]="user.Location.coords.latitude" [longitude]="user.Location.coords.longitude"></agm-marker>
            <agm-marker ngIf="selectedNote != null" [latitude]="selectedNote.Location.coords.latitude" [longitude]="selectedNote.Location.coords.longitude"></agm-marker>
        </agm-map>
    `
})
export class HomeComponent implements OnInit {

    user: _ue.TigerSpike.Test.BusinessLogic.Entities.User;
    selectedNote: _ne.TigerSpike.Test.BusinessLogic.Entities.Note;

    constructor() {
        this.selectedNote = null;
    }

    updateNoteMarker(note: _ne.TigerSpike.Test.BusinessLogic.Entities.Note) {
        this.selectedNote = note;
    }

    ngOnInit() {
        this.user = _uc.TigerSpike.Test.BusinessLogic.Controllers.UserController.GetLoggedOnUser();

        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition((position: Position) => {
                this.user.Location = position;
                console.log(position);
            }, (error: PositionError) => {
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
                }
            });
        };
    }
}