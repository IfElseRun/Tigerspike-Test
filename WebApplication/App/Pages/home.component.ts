import { Component, OnInit, Input, HostListener  } from '@angular/core';
import * as _ue from '../BusinessLogic/Entities/User';
import * as _ne from '../BusinessLogic/Entities/Note';
import * as _uc from '../BusinessLogic/Controllers/UserController';
import * as _bh from '../BusinessLogic/Helpers/Broadcaster';

@Component({
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
})
export class HomeComponent implements OnInit {

    user: _ue.TigerSpike.Test.BusinessLogic.Entities.User;
    selectedNote: _ne.TigerSpike.Test.BusinessLogic.Entities.Note;
    notePinLabelOptions: {};
    @Input() showSidebar: boolean;

    constructor(
        private userController: _uc.TigerSpike.Test.BusinessLogic.Controllers.UserController,
        private broadcaster: _bh.TigerSpike.Test.BusinessLogic.Helpers.Broadcaster
    ) {
        this.selectedNote = null;
        this.user = null;
        this.showSidebar = false;
    }

    updateNoteMarker($event: _ne.TigerSpike.Test.BusinessLogic.Entities.Note) {
        this.selectedNote = $event;
    }

    ngOnInit() {
        this.user = this.userController.GetLoggedOnUser();

        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition((position: Position) => {
                this.user.Location = position;
                console.log(position);
            }, (error: PositionError) => {
                //Set Default Location to NYC
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

        this.broadcaster.on<boolean>('SidebarToggle').subscribe(showSidebar => {
            this.showSidebar = showSidebar;
        });
    }
}