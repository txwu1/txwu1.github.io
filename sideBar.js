
function open(){
	document.getElementById("sideBar").style.display = "flex";
	document.getElementById("sideToggle").innerHTML = '\u00D7';
}

function close(){
	document.getElementById("sideBar").style.display = "none";
	document.getElementById("sideToggle").innerHTML = '\u2630';
}

$(document).ready(function(){

	$(".sideBtn").click(function()
	{
		$(this).text(function(index, text){
			if(text === '\u2630'){
				open();				
			} else {
				close();
			}
		});
	});

});
