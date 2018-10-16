import { Http } from '@angular/http';
import * as _ie from "../Entities/IEntity";

export namespace TigerSpike.Test.BusinessLogic.Controllers {
    export class BaseController<C extends BaseController<C, E>, E extends _ie.TigerSpike.Test.BusinessLogic.Entities.IEntity<E>> {

        constructor(private http: Http) {

        }

        private GetSingle(data: any, type: (new () => E)): E {
            let obj: E = new type();
            obj.Construct(data);
            return obj;
        }

        private GetMultiple(datas: Array<any>, type: (new () => E)): Array<E> {
            return datas.map(function (data: any) {
                let obj: E = new type();
                obj.Construct(data);
                return obj;
            });
        }

        public ExecuteRequest(options: RequestOptions, type: (new () => E)): void {
            if (options.isArray === undefined) {
                options.isArray = false;
            }
            switch (options.type) {
                case RequestType.Get:
                    this.http.get(options.url).subscribe((result) => {
                        if (options.isArray) {
                            options.callback(this.GetMultiple(result.json(), type));
                        } else {
                            options.callback(this.GetSingle(result.json(), type));
                        }
                    });
                    break;
                case RequestType.Post:
                    this.http.post(options.url, options.data).subscribe((result) => {
                        if (options.isArray) {
                            options.callback(this.GetMultiple(result.json(), type));
                        } else {
                            options.callback(this.GetSingle(result.json(), type));
                        }
                    });
                    break;
                case RequestType.Put:
                    this.http.put(options.url, options.data).subscribe((result) => {
                        if (options.isArray) {
                            options.callback(this.GetMultiple(result.json(), type));
                        } else {
                            options.callback(this.GetSingle(result.json(), type));
                        }
                    });
                    break;
                case RequestType.Delete:
                    this.http.delete(options.url).subscribe((result) => {
                        if (options.isArray) {
                            options.callback(this.GetMultiple(result.json(), type));
                        } else {
                            options.callback(this.GetSingle(result.json(), type));
                        }
                    });
                    break;
            }
        }
    }

    export interface RequestOptions {
        type: RequestType,
        url: string,
        data?: {},
        callback: (data: any) => void,
        isArray?: boolean
    }

    export enum RequestType {
        Get,
        Put,
        Post,
        Delete
    }
}