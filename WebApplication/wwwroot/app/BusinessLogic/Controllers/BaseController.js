"use strict";
var TigerSpike;
(function (TigerSpike) {
    var Test;
    (function (Test) {
        var BusinessLogic;
        (function (BusinessLogic) {
            var Controllers;
            (function (Controllers) {
                class BaseController {
                    constructor(http) {
                        this.http = http;
                    }
                    GetSingle(data, type) {
                        let obj = new type();
                        obj.Construct(data);
                        return obj;
                    }
                    GetMultiple(datas, type) {
                        return datas.map(function (data) {
                            let obj = new type();
                            obj.Construct(data);
                            return obj;
                        });
                    }
                    ExecuteRequest(options, type) {
                        if (options.isArray === undefined) {
                            options.isArray = false;
                        }
                        switch (options.type) {
                            case RequestType.Get:
                                this.http.get(options.url).subscribe((result) => {
                                    if (options.isArray) {
                                        options.callback(this.GetMultiple(result.json(), type));
                                    }
                                    else {
                                        options.callback(this.GetSingle(result.json(), type));
                                    }
                                });
                                break;
                            case RequestType.Post:
                                this.http.post(options.url, options.data).subscribe((result) => {
                                    if (options.isArray) {
                                        options.callback(this.GetMultiple(result.json(), type));
                                    }
                                    else {
                                        options.callback(this.GetSingle(result.json(), type));
                                    }
                                });
                                break;
                            case RequestType.Put:
                                this.http.put(options.url, options.data).subscribe((result) => {
                                    if (options.isArray) {
                                        options.callback(this.GetMultiple(result.json(), type));
                                    }
                                    else {
                                        options.callback(this.GetSingle(result.json(), type));
                                    }
                                });
                                break;
                            case RequestType.Delete:
                                this.http.delete(options.url).subscribe((result) => {
                                    if (options.isArray) {
                                        options.callback(this.GetMultiple(result.json(), type));
                                    }
                                    else {
                                        options.callback(this.GetSingle(result.json(), type));
                                    }
                                });
                                break;
                        }
                    }
                }
                Controllers.BaseController = BaseController;
                var RequestType;
                (function (RequestType) {
                    RequestType[RequestType["Get"] = 0] = "Get";
                    RequestType[RequestType["Put"] = 1] = "Put";
                    RequestType[RequestType["Post"] = 2] = "Post";
                    RequestType[RequestType["Delete"] = 3] = "Delete";
                })(RequestType = Controllers.RequestType || (Controllers.RequestType = {}));
            })(Controllers = BusinessLogic.Controllers || (BusinessLogic.Controllers = {}));
        })(BusinessLogic = Test.BusinessLogic || (Test.BusinessLogic = {}));
    })(Test = TigerSpike.Test || (TigerSpike.Test = {}));
})(TigerSpike = exports.TigerSpike || (exports.TigerSpike = {}));
//# sourceMappingURL=BaseController.js.map