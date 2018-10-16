"use strict";
const core_1 = require("angular2-cookie/core");
const _u = require("../Entities/User");
var TigerSpike;
(function (TigerSpike) {
    var Test;
    (function (Test) {
        var BusinessLogic;
        (function (BusinessLogic) {
            var Controllers;
            (function (Controllers) {
                class UserController {
                    static GetLoggedOnUser() {
                        let user = null;
                        if (this._cookieService.get(this._cookieName) !== undefined) {
                            user = new _u.TigerSpike.Test.BusinessLogic.Entities.User();
                            user.Username = this._cookieService.get(this._cookieName);
                        }
                        return user;
                    }
                    static SaveLoggedOnUser(username) {
                        let user = new _u.TigerSpike.Test.BusinessLogic.Entities.User();
                        user.Username = username;
                        this._cookieService.put(this._cookieName, user.Username);
                        return user;
                    }
                    static DeleteLoggedOnUser() {
                        this._cookieService.remove(this._cookieName);
                    }
                }
                UserController._cookieService = new core_1.CookieService();
                UserController._cookieName = "username";
                Controllers.UserController = UserController;
            })(Controllers = BusinessLogic.Controllers || (BusinessLogic.Controllers = {}));
        })(BusinessLogic = Test.BusinessLogic || (Test.BusinessLogic = {}));
    })(Test = TigerSpike.Test || (TigerSpike.Test = {}));
})(TigerSpike = exports.TigerSpike || (exports.TigerSpike = {}));
//# sourceMappingURL=UserController.js.map