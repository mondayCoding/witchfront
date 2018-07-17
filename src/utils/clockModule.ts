
export default class ClockModule {

	public static Since(date:number):string {

		let dateNow = new Date().getTime();

		let seconds = Math.floor(
			(dateNow - date) / 1000
		);
		
		let interval = Math.floor(seconds / 31536000);
		
		if (interval > 1) {
			return interval + " years";
		}
		interval = Math.floor(seconds / 2592000);
		if (interval > 1) {
			return interval + " months";
		}
		interval = Math.floor(seconds / 86400);
		if (interval > 1) {
			return interval + " days";
		}
		interval = Math.floor(seconds / 3600);
		if (interval > 1) {
			return interval + " hours";
		}
		interval = Math.floor(seconds / 60);
		if (interval > 1) {
			return interval + " minutes";
		}
		return Math.floor(seconds) + " seconds";
	}

	public active: boolean;
	public goal: number;
	public workingInterval: any;
	public elapsed: number;
	public total: number;
	public timetable: string;
	public today: string;

	constructor() {
		this.active = false;
		this.goal = (7.5)*60*60;
		this.elapsed = 0;
		this.total = 0;
		this.timetable = "this.getJSONTimeTable()";
		this.today = this.generateDayId();
	}

	//methods
	public Timer(){
		if (this.active){
			this.stopTimer();
		} else {
			this.startTimer();
		}
	}

	public startTimer(){
		this.active = true;
		let startTime = performance.now();
		this.working(startTime);
		this.workingInterval = setInterval( () => this.working(startTime), 500);
	}

	public stopTimer(){
		this.active = false;
		this.total += this.elapsed;
		this.elapsed = 0;
		clearInterval(this.workingInterval);
	}

	public working(startTime:any){
		this.elapsed = Math.round((performance.now() - startTime)/1000); 	//time in seconds
		let progressPercentage = Math.round((( this.elapsed + this.total) / this.goal ) * 100);
		this.updatePage(progressPercentage);
	}

	public updatePage(progressPercentage:number){
		$("#timePassed").html("this.getParsedTime( this.total + this.elapsed )");
		$("#weekday").html(this.getWeekDay());
		$("#ampm").html(this.getAAMPM());
		$("#time").html(this.getCurrentTime());
		$("#datecurrent").html("this.getCurrentDate()");
		$("#timeLeft").html("this.getParsedTime( this.goal - ( this.elapsed + this.total ))");

		$("#timePercents").html(progressPercentage +"%");
		$("#timePassedBar").html(progressPercentage +"%");
		$("#timePassedBar").width(progressPercentage +"%");
		$("#bar2").html(progressPercentage +"%");
		$("#bar2").width(progressPercentage +"%");
		$("#bar3").html(progressPercentage +"%");
		$("#bar3").width(progressPercentage +"%");
	}

	public announceStatus(){
		console.log(this.active ? "Clock is active" : "Clock is paused or disabled ");
		console.log("days id for current date is " + this.today );
		console.log((this.active) ? "time elapsed " + this.elapsed + " seconds"  : "elapsed is currently inactive");
	}

	public generateDayId() {
		let currentdate = new Date();
		let day = (currentdate.getDate() < 10) ? "0" + currentdate.getDate() : currentdate.getDate();
		let month = ((currentdate.getMonth()+1) < 10) ? "0" + (currentdate.getMonth()+1) : (currentdate.getMonth()+1);
		let year = currentdate.getFullYear();
		return "date-" + day +"-"+ month +"-"+ year;
  	}

	public getAAMPM() {
		let currentdate = new Date();
		let ampm = (currentdate.getHours() >= 12) ? "PM" : "AM";
		return ampm;
	}

	public getWeekDay() {
	 	let currentdate = new Date();
	 	let day = currentdate.getDay();
	 	switch (day) {
	 		case 0:
	 			return "Sunday";
	 		case 1:
	 			return "Monday";
	 		case 2:
	 			return "Tuesday";
	 		case 3:
	 			return "Wednesday";
	 		case 4:
	 			return "Thursday";
	 		case 5:
	 			return "Friday";
	 		default:
	 			return "Saturday";
	 	}
	 }

	public getCurrentTime() {
		let currentdate = new Date();
		let hours = (currentdate.getHours() < 10) ? "0" + currentdate.getHours() : currentdate.getHours();
		let minutes = (currentdate.getMinutes() < 10) ? "0" + currentdate.getMinutes() : currentdate.getMinutes();
		let seconds = (currentdate.getSeconds() < 10) ? "0" + currentdate.getSeconds() : currentdate.getSeconds();
		return hours +":"+ minutes +":"+ seconds;
	}

	public getCurrentDate() {
		return new Date();
	}
}

