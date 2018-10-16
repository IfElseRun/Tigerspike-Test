import * as _ne from './Note'

export namespace TigerSpike.Test.BusinessLogic.Entities {
    export class User {
        public Username: string;
        public Location: Position;
        public Notes: Array<_ne.TigerSpike.Test.BusinessLogic.Entities.Note>;

        constructor() {
            this.Notes = new Array<_ne.TigerSpike.Test.BusinessLogic.Entities.Note>();
        }
    }
}