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
const http_1 = require("@angular/http");
const _bc = require("./BaseController");
const _ne = require("../Entities/Note");
var TigerSpike;
(function (TigerSpike) {
    var Test;
    (function (Test) {
        var BusinessLogic;
        (function (BusinessLogic) {
            var Controllers;
            (function (Controllers) {
                let NoteController = class NoteController extends _bc.TigerSpike.Test.BusinessLogic.Controllers.BaseController {
                    constructor(_http) {
                        super(_http);
                        this._http = _http;
                    }
                    GetBySearchTerm(searchText, _callback) {
                        super.ExecuteRequest({
                            url: "/api/Note/Search/" + searchText,
                            callback: _callback,
                            isArray: true,
                            type: _bc.TigerSpike.Test.BusinessLogic.Controllers.RequestType.Get
                        }, _ne.TigerSpike.Test.BusinessLogic.Entities.Note);
                    }
                    GetByUsername(searchText, _callback) {
                        super.ExecuteRequest({
                            url: "/api/Note/Username/" + searchText,
                            callback: _callback,
                            isArray: true,
                            type: _bc.TigerSpike.Test.BusinessLogic.Controllers.RequestType.Get
                        }, _ne.TigerSpike.Test.BusinessLogic.Entities.Note);
                    }
                    GetAll(_callback) {
                        super.ExecuteRequest({
                            url: "/api/Note",
                            callback: _callback,
                            isArray: true,
                            type: _bc.TigerSpike.Test.BusinessLogic.Controllers.RequestType.Get
                        }, _ne.TigerSpike.Test.BusinessLogic.Entities.Note);
                    }
                    Insert(_data, _callback) {
                        super.ExecuteRequest({
                            url: "/api/Note",
                            callback: _callback,
                            type: _bc.TigerSpike.Test.BusinessLogic.Controllers.RequestType.Post,
                            data: _data
                        }, _ne.TigerSpike.Test.BusinessLogic.Entities.Note);
                    }
                };
                NoteController = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http])
                ], NoteController);
                Controllers.NoteController = NoteController;
            })(Controllers = BusinessLogic.Controllers || (BusinessLogic.Controllers = {}));
        })(BusinessLogic = Test.BusinessLogic || (Test.BusinessLogic = {}));
    })(Test = TigerSpike.Test || (TigerSpike.Test = {}));
})(TigerSpike = exports.TigerSpike || (exports.TigerSpike = {}));
//# sourceMappingURL=NoteController.js.map