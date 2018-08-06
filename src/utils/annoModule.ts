
import * as toastr from 'toastr';

// TODO otetaan käyttöön kun typescript 3.0 tulee saataville
// import key from './keys.json';
// console.log(key);
// const keys = require('./keys.json');
// console.log(keys);
// console.log(keys.USER_TIP_POSITION);


export default class Anno {

	public static getOptions = () => {
      return {
         closeButton: true,
         debug: false,
         newestOnTop: false,
         progressBar: false,
         positionClass: Anno.getPosition(),
         preventDuplicates: false,
         onclick: null as any,
         showDuration: "300",
         hideDuration: "1000",
         timeOut: "6500",
         extendedTimeOut: "3000",
         showEasing: "swing",
         hideEasing: "linear",
         showMethod: "fadeIn",
         hideMethod: "fadeOut"
      };
   }
   
   public static getPosition(){

      const position = sessionStorage.getItem("WITCHNODE_USER_TIPPOSITION");

      switch (position){
         case "top-right":
            return "toast-top-right";
         case "top-center":
            return "toast-top-center";
         case "bottom-right":
            return "toast-bottom-right";
         case "bottom-center":
            return "toast-bottom-center";
         default:
            return "toast-top-right";
      }
   }

	public static clear() {
		toastr.clear();
	}

	public static announce(msg: string, title: string = null, type = "success", options = Anno.getOptions()) {
		toastr[type](msg, title, options);
	}

	public static announcePow(msg: string, type = "success") {
		console.log(msg);
		toastr[type](msg);
	}
}

