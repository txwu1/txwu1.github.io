function getCurrentTime(){
	var d = new Date();
	var hey = "AM";
	let hours = d.getHours();
	if (hours > 12){
		hey = "PM";
		hours -= 11;
	}
	return hours + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" +
	d.getSeconds()).slice(-2) + " " + hey;
};

$(document).ready(function(){
	var update = $(".FileHeader");
	update.last().append("<span></span>");
	$(".FileHeader").children().last().text("Last Loaded: " + getCurrentTime());
});
