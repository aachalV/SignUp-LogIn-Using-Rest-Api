import { setCookie, deleteCookie } from "./manageCookies";

class Auth {
  constructor() {
    this.authenticated = false;
  }
  signup(cb) {
    //setCookie("token", token);
    this.authenticated = true;
    cb();
  }
  login(token) {
    setCookie("token", token, { expires: new Date(Date.now() + 86400e3) });
    //{ secure: true, "max-age": 86400 }
    this.authenticated = true;
  }
  logout(cb) {
    deleteCookie("token");
    this.authenticated = false;
    cb();
  }
  isRegistered() {
    this.authenticated = true;
  }
  notRegistered() {
    this.authenticated = false;
  }
  isAuthenticated() {
    return this.authenticated;
  }
}
export default new Auth();
