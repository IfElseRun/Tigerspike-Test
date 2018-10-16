"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("angular2-cookie/core");
const core_2 = require("@angular/core");
const _u = require("../Entities/User");
var TigerSpike;
(function (TigerSpike) {
    var Test;
    (function (Test) {
        var BusinessLogic;
        (function (BusinessLogic) {
            var Controllers;
            (function (Controllers) {
                let UserController = UserController_1 = class UserController {
                    GetLoggedOnUser() {
                        let user = null;
                        if (UserController_1._cookieService.get(UserController_1._cookieName) !== undefined) {
                            user = new _u.TigerSpike.Test.BusinessLogic.Entities.User();
                            user.Username = UserController_1._cookieService.get(UserController_1._cookieName);
                        }
                        return user;
                    }
                    SaveLoggedOnUser(username) {
                        let user = new _u.TigerSpike.Test.BusinessLogic.Entities.User();
                        user.Username = username;
                        UserController_1._cookieService.put(UserController_1._cookieName, user.Username);
                        return user;
                    }
                    DeleteLoggedOnUser() {
                        UserController_1._cookieService.remove(UserController_1._cookieName);
                    }
                };
                UserController._cookieService = new core_1.CookieService();
                UserController._cookieName = "username";
                UserController = UserController_1 = __decorate([
                    core_2.Injectable()
                ], UserController);
                Controllers.UserController = UserController;
                var UserController_1;
            })(Controllers = BusinessLogic.Controllers || (BusinessLogic.Controllers = {}));
        })(BusinessLogic = Test.BusinessLogic || (Test.BusinessLogic = {}));
    })(Test = TigerSpike.Test || (TigerSpike.Test = {}));
})(TigerSpike = exports.TigerSpike || (exports.TigerSpike = {}));
//# sourceMappingURL=UserController.js.map