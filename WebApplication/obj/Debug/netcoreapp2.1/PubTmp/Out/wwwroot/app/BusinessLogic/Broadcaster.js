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
const Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
var TigerSpike;
(function (TigerSpike) {
    var Test;
    (function (Test) {
        var BusinessLogic;
        (function (BusinessLogic) {
            var Helpers;
            (function (Helpers) {
                let Broadcaster = class Broadcaster {
                    constructor() {
                        this._eventBus = new Subject_1.Subject();
                    }
                    broadcast(key, data) {
                        this._eventBus.next({ key, data });
                    }
                    on(key) {
                        return this._eventBus.asObservable()
                            .filter(event => event.key === key)
                            .map(event => event.data);
                    }
                };
                Broadcaster = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [])
                ], Broadcaster);
                Helpers.Broadcaster = Broadcaster;
            })(Helpers = BusinessLogic.Helpers || (BusinessLogic.Helpers = {}));
        })(BusinessLogic = Test.BusinessLogic || (Test.BusinessLogic = {}));
    })(Test = TigerSpike.Test || (TigerSpike.Test = {}));
})(TigerSpike = exports.TigerSpike || (exports.TigerSpike = {}));
//# sourceMappingURL=Broadcaster.js.map