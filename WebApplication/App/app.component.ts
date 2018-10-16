import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ue from './BusinessLogic/Entities/User';
import * as _uc from './BusinessLogic/Controllers/UserController';
import * as _bh from './BusinessLogic/Helpers/Broadcaster';

@Component({
    selector: 'tigerspike-test',
    template: `
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container d-flex justify-content-between">
                  <a class="navbar-brand d-flex align-items-left" routerLink="home">
                    <img src="/images/TS_Logo-Light.png" width="105.45" height="32" class="d-inline-block align-top" alt="Tigerspike Test">&nbsp;Test
                  </a>
                    &nbsp;
                  <button *ngIf="loggedInUser != null" class="btn btn-primary justify-content-center d-md-none d-lg-none" type="button" (click)="toggleSidebar()">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                    &nbsp;
                  <a *ngIf="loggedInUser != null" routerLink="login" routerLinkActive="active" class="btn btn-primary justify-content-end" type="button">Log Out</a>
                </div>
            </nav>
        </header>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    providers: []
})
export class AppComponent implements OnInit {

    loggedInUser: _ue.TigerSpike.Test.BusinessLogic.Entities.User = null;
    showSidebar: boolean;

    constructor(
        private router: Router,
        private userController: _uc.TigerSpike.Test.BusinessLogic.Controllers.UserController,
        private broadcaster: _bh.TigerSpike.Test.BusinessLogic.Helpers.Broadcaster
    )
    {
        this.showSidebar = false;
    }

    toggleSidebar(): void {
        this.showSidebar = !this.showSidebar;
        this.broadcaster.broadcast('SidebarToggle', this.showSidebar);
    }

    ngOnInit(): void {
        this.router.events.subscribe((event) => {
            this.loggedInUser = this.userController.GetLoggedOnUser();
            if (this.loggedInUser == null && event.url != '/login') {
                this.router.navigate(['/login']);
            }
        });
    }
}