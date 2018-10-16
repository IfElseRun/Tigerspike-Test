import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home.component';
import { LoginComponent } from './Pages/login.component';
import { SidebarHomeComponent } from './Pages/Home/sidebar.home.component';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA3BGrUX8Cn2QT_U4oMG1xCrOTQhTrdw9g'
        })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SidebarHomeComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        CookieService
    ]
})
export class AppModule { }