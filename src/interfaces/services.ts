

// user login response object
export interface IUser {
   level: userLevel;
   settings: {
      language: string;
      position: string;
      scale: string;
      theme: string;
   };
}

export enum userLevel {
   admin = 0,
   developer = 1,
   user = 2,
   quest = 3
}
