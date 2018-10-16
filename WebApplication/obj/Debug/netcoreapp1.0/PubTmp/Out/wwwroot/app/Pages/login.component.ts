import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ue from '../BusinessLogic/Entities/User';
import * as _uc from '../BusinessLogic/Controllers/UserController';

@Component({
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
})
export class LoginComponent implements OnInit {
    model: any = {
        username: ''
    };
    constructor(private router: Router) {}

    ngOnInit() {
        _uc.TigerSpike.Test.BusinessLogic.Controllers.UserController.DeleteLoggedOnUser();
    }

    public loginSubmit(event) {
        _uc.TigerSpike.Test.BusinessLogic.Controllers.UserController.SaveLoggedOnUser(this.model.username);
        this.router.navigate(['/home']);
    }
}