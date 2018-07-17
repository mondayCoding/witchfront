
import * as toastr from 'toastr';
//window.toastr = toastr;


export default class Anno {

	public static options = {
		closeButton: true,
		debug: false,
		newestOnTop: false,
		progressBar: false,
		positionClass: "toast-top-right",
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

	//methods
	public static clear() {
		toastr.clear();
	}

	public static announce(msg: string, title: string = null, type = "success", options: object = this.options) {
		toastr[type](msg, title, options);
	}

	public static announcePow(msg: string, type = "success") {
		console.log(msg);
		toastr[type](msg);
	}

}
