import { CookieService } from 'angular2-cookie/core';
import * as _u from '../Entities/User';

export namespace TigerSpike.Test.BusinessLogic.Controllers {
    export class UserController {
        private static _cookieService: CookieService = new CookieService();
        private static _cookieName: string = "username";

        public static GetLoggedOnUser(): _u.TigerSpike.Test.BusinessLogic.Entities.User {
            let user: _u.TigerSpike.Test.BusinessLogic.Entities.User = null;
            if (this._cookieService.get(this._cookieName) !== undefined) {
                user = new _u.TigerSpike.Test.BusinessLogic.Entities.User();
                user.Username = this._cookieService.get(this._cookieName);
            }
            return user;
        }

        public static SaveLoggedOnUser(username: string): _u.TigerSpike.Test.BusinessLogic.Entities.User {
            let user: _u.TigerSpike.Test.BusinessLogic.Entities.User = new _u.TigerSpike.Test.BusinessLogic.Entities.User();
            user.Username = username;
            this._cookieService.put(this._cookieName, user.Username);
            return user;
        }

        public static DeleteLoggedOnUser(): void {
            this._cookieService.remove(this._cookieName);
        }
    }
}