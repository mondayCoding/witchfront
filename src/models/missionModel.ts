

export class Task {
   public objective: string;
   public description: string;
   public complete: boolean;
   public priority: number;
   public index: number;
   public id: string;
   public createDate: Date;
   public completeDate: Date;

   constructor(objective:string, complete:boolean = false, createDate?:Date, completeDate?:Date) {
      this.objective = objective;
      this.complete = complete;
      this.createDate = createDate;
      this.completeDate = completeDate;
   }
}

export class TaskList {

   //properties
   public missionBoard: Task[];

   //constructor
   constructor(missionBoard: Task[]) {
      this.missionBoard = missionBoard || [];
   }

   //methods
   public announceMissions() {
      this.missionBoard.forEach((mission) => {
         console.log(`mission with objective ${mission.objective}`);
         console.log( (mission.complete) ? "has been completed" : "is incomplete");
      });
   }

   public newMission(objective:string, complete = false) {
      let newMission = new Task(objective, complete);
      this.missionBoard.push(newMission);
   }

   public getCompleted():Task[]{
      let completed = this.missionBoard.filter( (mission) => mission.complete === true );
      return completed;
   }

   public getIncomplete():Task[]{
      let incomplete = this.missionBoard.filter( (mission) => mission.complete !== true );
      return incomplete;
   }

   public static getQuests(onSuccess:Function){
      //fetch data via ajax and set state
      $.ajax({
         type:"get",
         url:"/api/todo",
         success: onSuccess(),
         error: (xhr, ajaxOptions, thrownError) => {
            console.log("ajax error occurred | code: " +  xhr.status + " | message: " +  thrownError)
         }
      });
   }

   public static addQuest(newQuest:string, onSuccess:Function){
      //add new quest to list
      $.ajax({
         type:"put",
         data: {data: newQuest},
         url:"/api/todo",
         success: onSuccess(),
         error: (xhr, ajaxOptions, thrownError) => {
            console.log("ajax error occurred | code: " +  xhr.status + " | message: " +  thrownError)
         }
      });
   }

   public static removeQuest(removeObj:string, onSuccess:Function){
      //add new quest to list
      $.ajax({
         type:"delete",
         data: {object: removeObj},
         url:"/api/todo",
         success: onSuccess(),
         error: (xhr, ajaxOptions, thrownError) => {
            console.log("ajax error occurred | code: " +  xhr.status + " | message: " +  thrownError);
         }
      });
   }

}
