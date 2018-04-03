var treeMade = false;


function getTime(){
	var d = new Date();
	return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
};

$(document).ready(function(){
	var createTreeButton = $("#tableButton");
	var table = $("#table");

	function addRow(){
		table.append("<tr></tr>");
		$("tr").last().append('<td></td>');
		$("td").last().val(getTime());
	};

	function createTree(){
		table.val("Click to add a row");
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
