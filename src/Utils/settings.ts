

// TODO: centralize "app settings" as static class that reads/writes to localstorage

const KEYS = {
   ISLOGGED: "WITCHNODE_ISLOGGEDIN",                        // user login state as boolean
   USER_ROLE: "WITCHNODE_USERROLE",                         // user role (level)
   USER_TIP_POSITION : "WITCHNODE_USER_TIP_POSITION",       // setting - position of notifications
   USER_THEME: "WITCHNODE_USER_THEME",                       // setting - selected UI theme
   USER_NAME: "WITCHNODE_USER_NAME",                         // username
};

export default class Settings {

   static currentTheme = sessionStorage.getItem(KEYS.USER_THEME);
   static currentUser = sessionStorage.getItem(KEYS.USER_NAME);
   static CurrentRole = sessionStorage.getItem(KEYS.USER_ROLE);
   static isLoggedIn = sessionStorage.getItem(KEYS.ISLOGGED); 
   static CurrentNotifyPos = sessionStorage.getItem(KEYS.USER_TIP_POSITION);

   // notification position
   static getNotificationPosition() {
      return sessionStorage.getItem(KEYS.USER_TIP_POSITION);
   }

   static setNotificationPosition(item:string) {
      return sessionStorage.setItem(KEYS.USER_TIP_POSITION, item);
   }

   // current UI theme
   static getTheme() {
      return sessionStorage.getItem(KEYS.USER_THEME);
   }

   static setTheme(item:string) {
      return sessionStorage.setItem(KEYS.USER_THEME, item);
   }

   // User role (level of authentication)
   static getUserLevel() {
      return parseInt(sessionStorage.getItem(KEYS.USER_ROLE),0);
   }

   static setUserLevel(item:number) {
      const KEYVALUE = item.toString();
      return sessionStorage.setItem(KEYS.USER_ROLE, KEYVALUE);
   }

   // is logged 
   static getIsLoggedIn() {
      return (sessionStorage.getItem(KEYS.ISLOGGED)) === "true";
   }

   static setIsLoggedIn(item:boolean) {
      const KEYVALUE = item.toString();
      return sessionStorage.setItem(KEYS.ISLOGGED, KEYVALUE);
   }

   // user name
   static getLoggedUserName() {
      return sessionStorage.getItem(KEYS.USER_NAME);
   }

   static setLoggedUserName(item:string) {
      const KEYVALUE = item;
      return sessionStorage.setItem(KEYS.USER_NAME, KEYVALUE);
   }
}


// alternate way to handle settings
// these are internal and will  be lost if user refreshes browser session
// static current = {
//    setUser: "",
//    setLevel: "",
//    setName: "",
//    setTheme: ""
// };

// static getCurrentSettings(){
//    return this.current;
// }
