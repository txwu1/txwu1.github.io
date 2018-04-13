function getCurrentTime(){
	var d = new Date();
	var hey = "AM";
	if (d.getHours() > 12){
		hey = "PM";
	}
	return (d.getHours() % 12) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" +
	d.getSeconds()).slice(-2) + " " + hey;
};

$(document).ready(function(){
	var update = $(".FileHeader");
	update.last().append("<span></span>");
	$(".FileHeader").children().last().text("Last Loaded: " + getCurrentTime());
});
