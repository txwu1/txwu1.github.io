var treeMade = false;


function getTime(){
	var d = new Date();
	return d.getMonth() + "-" + d.getDate() + "-" + d.getFullYear() + ": " +
	d.getHours() + ":" + d.getMinutes() + ":" + ("0" + d.getSeconds()).slice(-2);
};

$(document).ready(function(){
	var createTreeButton = $("#tableButton");
	var table = $("#table");

	function addRow(){
		table.append("<tr></tr>");
		$("tr").last().append('<td></td>');
		$("td").last().text("Last clicked: " + getTime());
	};

	function createTree(){
		createTreeButton.text("Click to add a row");
		table.append("<tr></tr>");
		$("tr").last().append('<th>Button Clicks</th>');
	};

	createTreeButton.click(function(evt){
		evt.preventDefault();
		if (treeMade === false){
			createTree();
			treeMade = true;
		} else{
			addRow();
		}
	});
});
