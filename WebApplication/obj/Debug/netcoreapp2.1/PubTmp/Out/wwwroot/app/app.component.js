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
const router_1 = require("@angular/router");
const _uc = require("./BusinessLogic/Controllers/UserController");
const _bh = require("./BusinessLogic/Helpers/Broadcaster");
let AppComponent = class AppComponent {
    constructor(router, userController, broadcaster) {
        this.router = router;
        this.userController = userController;
        this.broadcaster = broadcaster;
        this.loggedInUser = null;
        this.showSidebar = false;
    }
    toggleSidebar() {
        this.showSidebar = !this.showSidebar;
        this.broadcaster.broadcast('SidebarToggle', this.showSidebar);
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            this.loggedInUser = this.userController.GetLoggedOnUser();
            if (this.loggedInUser == null && event.url != '/login') {
                this.router.navigate(['/login']);
            }
        });
    }
};
AppComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [router_1.Router, _uc.TigerSpike.Test.BusinessLogic.Controllers.UserController, _bh.TigerSpike.Test.BusinessLogic.Helpers.Broadcaster])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map