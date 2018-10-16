import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ue from '../BusinessLogic/Entities/User';
import * as _uc from '../BusinessLogic/Controllers/UserController';

@Component({
    selector: 'login',
    template: `
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <form (ngSubmit)="loginSubmit($event)">
            <div class="form-group">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="text" name="username" class="form-control" placeholder="Username" aria-describedby="emailHelp" required autofocus [(ngModel)]="model.username" #username="ngModel">
                <small *ngIf="!username.valid" id="emailHelp" class="form-text text-muted">Username is required</small>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    `
})
export class LoginComponent implements OnInit {
    model: any = {
        username: ''
    };
    constructor(private router: Router, private userController: _uc.TigerSpike.Test.BusinessLogic.Controllers.UserController) {}

    ngOnInit() {
        this.userController.DeleteLoggedOnUser();
    }

    public loginSubmit(event) {
        this.userController.SaveLoggedOnUser(this.model.username);
        this.router.navigate(['/home']);
    }
}