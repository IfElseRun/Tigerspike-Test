import { Injectable } from '@angular/core';

export namespace TigerSpike.Test.BusinessLogic {
    @Injectable()
    export class Helpers {
        public CloneAsObject(obj: any) {
            if (obj === null || !(obj instanceof Object)) {
                return obj;
            }
            var temp = (obj instanceof Array) ? [] : {};

            for (let key in obj) {
                temp[key] = this.CloneAsObject(obj[key]);
            }
            return temp;
        }
    }
}