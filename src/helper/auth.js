import { setCookie, deleteCookie } from "./manageCookies";

class Auth {
  constructor() {
    this.authenticated = false;
  }
  login(token, cb) {
    setCookie("token", token);
    this.authenticated = true;
    cb();
  }
  logout(cb) {
    deleteCookie("token");
    this.authenticated = false;
    cb();
  }
  isAuthenticated() {
    return this.authenticated;
  }
}
export default new Auth();
