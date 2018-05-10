var treeMade = false;


function getTime(){
	var d = new Date();
	return d.getMonth() + "-" + d.getDate() + "-" + d.getFullYear() + ": " +
	("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
};

$(document).ready(function(){
	var createTreeButton = $("#tableButton");
	var clearButton = $("#tableClearButton");
	var resetButton = $("#tableResetButton");
	var table = $("#table");
	var count = 0;

	function addRow(){
		if (count > 9){
			clear();
		}
		table.append("<tr></tr>");
		count++;
		var row = table.children().last();
		row.append('<td></td>');
		row.text("Last clicked: " + getTime());
		row.addClass("row");
	};

	function createTree(){
		createTreeButton.text("Click to add a row");
		table.append("<tr></tr>");
		$(table, "tr").last().append('<th>Button Clicks</th>');
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

	clearButton.click(function(evt){
		evt.preventDefault();
		if (treeMade === true){
			clear();
		} 
	});

	function clear() {
		table.children(".row").remove();
		count = 0;
	};

	resetButton.click(function(evt){
		evt.preventDefault();
		table.children().remove();
		createTreeButton.text("Click this to create a table")
		count = 0;
		treeMade = false;
	});
});
