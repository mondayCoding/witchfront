
//libraries

export enum userType {
   admin,
   user, 
   visitor
}

interface Isettings {
   uiTheme:number;
   avatar: string;
}

export default class User {

   public username: string;
   public email: string;
   public password:string;
   public settings: Isettings;
   public userType: userType;

   constructor(name:string){
      this.username = name;
      this.email = "";
      this.password = "";
      this.userType = userType.admin;
      this.settings = null;
   }
}


