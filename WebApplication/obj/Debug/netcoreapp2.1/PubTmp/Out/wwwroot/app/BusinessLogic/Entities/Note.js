"use strict";
var TigerSpike;
(function (TigerSpike) {
    var Test;
    (function (Test) {
        var BusinessLogic;
        (function (BusinessLogic) {
            var Entities;
            (function (Entities) {
                class Note {
                    Construct(data) {
                        this.Username = data.Username;
                        this.Location = data.Location;
                        this.Text = data.Text;
                        return this;
                    }
                }
                Entities.Note = Note;
            })(Entities = BusinessLogic.Entities || (BusinessLogic.Entities = {}));
        })(BusinessLogic = Test.BusinessLogic || (Test.BusinessLogic = {}));
    })(Test = TigerSpike.Test || (TigerSpike.Test = {}));
})(TigerSpike = exports.TigerSpike || (exports.TigerSpike = {}));
//# sourceMappingURL=Note.js.map