import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _bc from './BaseController'
import * as _ne from '../Entities/Note'

export namespace TigerSpike.Test.BusinessLogic.Controllers {
    @Injectable()
    export class NoteController extends _bc.TigerSpike.Test.BusinessLogic.Controllers.BaseController<NoteController, _ne.TigerSpike.Test.BusinessLogic.Entities.Note> {

        constructor(private _http: Http) {
            super(_http);
        }

        public GetBySearchTerm(searchText: string, _callback: (data: Array<_ne.TigerSpike.Test.BusinessLogic.Entities.Note>) => void): void {
            super.ExecuteRequest({
                url: "/api/Note/Search/" + searchText,
                callback: _callback,
                isArray: true,
                type: _bc.TigerSpike.Test.BusinessLogic.Controllers.RequestType.Get
            }, _ne.TigerSpike.Test.BusinessLogic.Entities.Note);
        }

        public GetByUsername(searchText: string, _callback: (data: Array<_ne.TigerSpike.Test.BusinessLogic.Entities.Note>) => void): void {
            super.ExecuteRequest({
                url: "/api/Note/Username/" + searchText,
                callback: _callback,
                isArray: true,
                type: _bc.TigerSpike.Test.BusinessLogic.Controllers.RequestType.Get
            }, _ne.TigerSpike.Test.BusinessLogic.Entities.Note);
        }

        public GetAll(_callback: (data: Array<_ne.TigerSpike.Test.BusinessLogic.Entities.Note>) => void): void {
            super.ExecuteRequest({
                url: "/api/Note",
                callback: _callback,
                isArray: true,
                type: _bc.TigerSpike.Test.BusinessLogic.Controllers.RequestType.Get
            }, _ne.TigerSpike.Test.BusinessLogic.Entities.Note);
        }

        public Insert(_data: _ne.TigerSpike.Test.BusinessLogic.Entities.Note, _callback: (data: _ne.TigerSpike.Test.BusinessLogic.Entities.Note) => void): void {
            super.ExecuteRequest({
                url: "/api/Note",
                callback: _callback,
                type: _bc.TigerSpike.Test.BusinessLogic.Controllers.RequestType.Post,
                data: _data
            }, _ne.TigerSpike.Test.BusinessLogic.Entities.Note);
        }
    }
}