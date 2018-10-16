"use strict";
var TigerSpike;
(function (TigerSpike) {
    var Test;
    (function (Test) {
        var BusinessLogic;
        (function (BusinessLogic) {
            var Entities;
            (function (Entities) {
                class User {
                    constructor() {
                        this.Notes = new Array();
                    }
                }
                Entities.User = User;
            })(Entities = BusinessLogic.Entities || (BusinessLogic.Entities = {}));
        })(BusinessLogic = Test.BusinessLogic || (Test.BusinessLogic = {}));
    })(Test = TigerSpike.Test || (TigerSpike.Test = {}));
})(TigerSpike = exports.TigerSpike || (exports.TigerSpike = {}));
//# sourceMappingURL=User.js.map