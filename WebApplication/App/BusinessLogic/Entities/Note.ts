import * as _ie from "./IEntity";

export namespace TigerSpike.Test.BusinessLogic.Entities {
    export class Note implements _ie.TigerSpike.Test.BusinessLogic.Entities.IEntity<Note> {
        public Username: string;
        public Location: Position;
        public Text: string;

        public Construct(data: any): Note {
            this.Username = data.Username;
            this.Location = data.Location;
            this.Text = data.Text;
            return this;
        }
    }
}