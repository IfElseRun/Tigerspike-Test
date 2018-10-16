import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ue from './BusinessLogic/Entities/User';
import * as _uc from './BusinessLogic/Controllers/UserController';

@Component({
    selector: 'tigerspike-test',
    template: `
        <div class="container">
            <nav *ngIf="loggedInUser != null">
                <a routerLink="login" routerLinkActive="active">Log Out</a>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `,
    providers: []
})
export class AppComponent implements OnInit {

    loggedInUser: _ue.TigerSpike.Test.BusinessLogic.Entities.User = null;

    constructor(
        private router: Router
    )
    {}

    ngOnInit() {

        this.router.events.subscribe((event) => {
            this.loggedInUser = _uc.TigerSpike.Test.BusinessLogic.Controllers.UserController.GetLoggedOnUser();
            if (this.loggedInUser == null && event.url != '/login') {
                this.router.navigate(['/login']);
            }
        });
    }
}