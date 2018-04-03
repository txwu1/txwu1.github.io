function getCurrentTime(){
	var d = new Date();
	var hey = "AM";
	if (d.getHours() > 12){
		hey = "PM";
	}
	return (d.getHours() % 12) + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + hey;
};

$(document).ready(function(){
	var update = $(".FileHeader");
	update.last().append("<p></p>");
	$(".FileHeader").children().last().text("Last Loaded: " + getCurrentTime());
});
