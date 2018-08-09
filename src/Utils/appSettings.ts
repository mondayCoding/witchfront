

// TODO: centralize "app settings" as static class that reads/writes to localstorage

const StorageKeys = {
   ISLOGGED: "WITCHNODE_ISLOGGEDIN",                        // user login state as boolean
   USER_ROLE: "WITCHNODE_USERROLE",                         // user role (level)
   USER_TIP_POSITION : "WITCHNODE_USER_TIP_POSITION",       // setting - position of notifications
   USER_THEME: "WITCHNODE_USER_THEME"                       // setting - selected UI theme
};

export default class AppSettings {

   public static keys = StorageKeys;

   // notification position
   public static getNotificationPosition() {
      const KEY = this.keys;
      return sessionStorage.getItem(KEY.USER_TIP_POSITION);
   }

   public static setNotificationPosition(item:string) {
      const KEY = this.keys;
      return sessionStorage.setItem(KEY.USER_TIP_POSITION, item);
   }

   // current UI theme
   public static getTheme() {
      const KEY = this.keys;
      return sessionStorage.getItem(KEY.USER_THEME);
   }

   public static setTheme(item:string) {
      const KEY = this.keys;
      return sessionStorage.setItem(KEY.USER_THEME, item);
   }

   // User role (level of authentication)
   public static getUserLevel() {
      const KEY = this.keys;
      return parseInt(sessionStorage.getItem(KEY.USER_ROLE),0);
   }

   public static setUserLevel(item:number) {
      const KEY = this.keys;
      const KEYVALUE = item.toString();
      return sessionStorage.setItem(KEY.USER_ROLE, KEYVALUE);
   }

   // user logged in state
   public static getIsLoggedIn() {
      const KEY = this.keys;
      return (sessionStorage.getItem(KEY.ISLOGGED)) === "true";
   }

   public static setIsLoggedIn(item:boolean) {
      const KEY = this.keys;
      const KEYVALUE = item.toString();
      return sessionStorage.setItem(KEY.ISLOGGED, KEYVALUE);
   }
}
