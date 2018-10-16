"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const cookies_service_1 = require("angular2-cookie/services/cookies.service");
const app_component_1 = require("./app.component");
const home_component_1 = require("./Pages/home.component");
const login_component_1 = require("./Pages/login.component");
const sidebar_home_component_1 = require("./Pages/Home/sidebar.home.component");
const _nc = require("./BusinessLogic/Controllers/NoteController");
const _uc = require("./BusinessLogic/Controllers/UserController");
const _h = require("./BusinessLogic/Helpers");
const _bh = require("./BusinessLogic/Helpers/Broadcaster");
const app_routing_module_1 = require("./app-routing.module");
const core_2 = require("@agm/core");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyA3BGrUX8Cn2QT_U4oMG1xCrOTQhTrdw9g'
            })
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            sidebar_home_component_1.SidebarHomeComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            cookies_service_1.CookieService,
            _nc.TigerSpike.Test.BusinessLogic.Controllers.NoteController,
            _uc.TigerSpike.Test.BusinessLogic.Controllers.UserController,
            _h.TigerSpike.Test.BusinessLogic.Helpers,
            _bh.TigerSpike.Test.BusinessLogic.Helpers.Broadcaster
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map