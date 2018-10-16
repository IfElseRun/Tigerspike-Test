export namespace TigerSpike.Test.BusinessLogic.Entities {
    export interface IEntity<E> {
        Construct(data: any): E;
    }
}