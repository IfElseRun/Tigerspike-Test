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
const _uc = require("../BusinessLogic/Controllers/UserController");
let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
        this.model = {
            username: ''
        };
    }
    ngOnInit() {
        _uc.TigerSpike.Test.BusinessLogic.Controllers.UserController.DeleteLoggedOnUser();
    }
    loginSubmit(event) {
        _uc.TigerSpike.Test.BusinessLogic.Controllers.UserController.SaveLoggedOnUser(this.model.username);
        this.router.navigate(['/home']);
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: `
    <form (ngSubmit)="loginSubmit($event)">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="text" name="username" class="form-control" placeholder="Username" required autofocus [(ngModel)]="model.username" #username="ngModel">
        <div *ngIf="!username.valid" class="help-block">Username is required</div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
    `
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map