import { CookieService } from 'angular2-cookie/core';
import { Injectable } from '@angular/core';
import * as _u from '../Entities/User';

export namespace TigerSpike.Test.BusinessLogic.Controllers {
    @Injectable()
    export class UserController {
        private static _cookieService: CookieService = new CookieService();
        private static _cookieName: string = "username";

        public GetLoggedOnUser(): _u.TigerSpike.Test.BusinessLogic.Entities.User {
            let user: _u.TigerSpike.Test.BusinessLogic.Entities.User = null;
            if (UserController._cookieService.get(UserController._cookieName) !== undefined) {
                user = new _u.TigerSpike.Test.BusinessLogic.Entities.User();
                user.Username = UserController._cookieService.get(UserController._cookieName);
            }
            return user;
        }

        public SaveLoggedOnUser(username: string): _u.TigerSpike.Test.BusinessLogic.Entities.User {
            let user: _u.TigerSpike.Test.BusinessLogic.Entities.User = new _u.TigerSpike.Test.BusinessLogic.Entities.User();
            user.Username = username;
            UserController._cookieService.put(UserController._cookieName, user.Username);
            return user;
        }

        public DeleteLoggedOnUser(): void {
            UserController._cookieService.remove(UserController._cookieName);
        }
    }
}