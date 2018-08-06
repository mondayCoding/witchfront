

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
   public static get_NotificationPos() {
      const KEY = this.keys;
      return sessionStorage.getItem(KEY.USER_TIP_POSITION);
   }

   public static set_NotificationPos(item:string) {
      const KEY = this.keys;
      return sessionStorage.setItem(KEY.USER_TIP_POSITION, item);
   }

   // current UI theme
   public static get_Theme() {
      const KEY = this.keys;
      return sessionStorage.getItem(KEY.USER_THEME);
   }

   public static set_Theme(item:string) {
      const KEY = this.keys;
      return sessionStorage.setItem(KEY.USER_THEME, item);
   }

   // User role (level of authentication)
   public static get_user() {
      const KEY = this.keys;
      return sessionStorage.getItem(KEY.USER_THEME);
   }

   public static set_user(item:string) {
      const KEY = this.keys;
      return sessionStorage.setItem(KEY.USER_THEME, item);
   }

}
