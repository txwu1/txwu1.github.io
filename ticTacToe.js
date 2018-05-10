
$(document).ready(function(){
	
	let table = $('#tTable');
	let resetTable = $('#tTableReset');
	let clearTable = $('#tTableClear');

	let player1 = new Player("#ff0000");
	let player2 = new Player("#0000ff");
	let turn = 0;
	let player = player1;
	function makeGrid(){
		for (let i = 0; i < 3; i++){
			table.append("<tr></tr>");
			for ( var j = 0; j < 3; j++){
				table.children("tr").last().append('<td class="tCol"></td>');
				$(".tCol").last().css("background-color", "#ffffff");
				$(".tCol").last().css("width", "50px");
				$(".tCol").last().css("height", "50px");
			}
		}
	}
	function clear(){
		table.children().remove();
		makeGrid();
	}

	table.on('click', 'td', function(){
		if ($(this).css('background-color') === "rgb(255, 255, 255)"){
			$(this).css('background-color', player.color);
		
			let win = checkForWin();
			if (win === true){
				player.wins++;
				updateWins();
				// play again?
				clear();
			} else {
				// check if full
				if ((++turn) % 2 === 1){
					player = player2;
				} else {
					player = player1;
				}
			}
		}

	});
	

	clearTable.click(function(evt){
		clear();
		turn = 0;
		player = player1;
	});

	resetTable.click(function(evt){
		clear();
		turn = 0;
		player = player1;
		player1.wins = 0;
		player2.wins = 0;
		updateWins();
	});

	function checkForWin(){
		let win = false;
		for (let i = 0; i < 3; i++){
			let count1 = 0;
			let count2 = 0;
			for (let j = 0; j < 3; j++){
				let cellCol = table.children().eq(i).children().eq(j).css('background-color');
				if ( rgb2hex(cellCol) === player1.color){
					count1++;
					if (count1 === 3){
						win = true;
					}
				} else if ( rgb2hex(cellCol) === player2.color){
					count2++;
					if (count2 === 3){
						win = true;
					}
				}
			}
		}
		for (let i = 0; i < 3; i++){
			let count1 = 0;
			let count2 = 0;
			for (let j = 0; j < 3; j++){
				let cellCol = table.children().eq(j).children().eq(i).css('background-color');
				if ( rgb2hex(cellCol) === player1.color){
					count1++;
					if (count1 === 3){
						win = true;
					}
				} else if ( rgb2hex(cellCol) === player2.color){
					count2++;
					if (count2 === 3){
						win = true;
					}
				}
			}
		}

		let count1 = 0;
		let count2 = 0;
		for (let i = 0; i < 3; i++){
			let cellCol = table.children().eq(i).children().eq(i).css('background-color');
			if ( rgb2hex(cellCol) === player1.color){
				count1++;
				if (count1 === 3){
					win = true;
				}
			} else if ( rgb2hex(cellCol) === player2.color){
				count2++;
				if (count2 === 3){
					win = true;
				}
			}
		}

		count1 = 0;
		count2 = 0;
		for (let i = 0; i < 3; i++){
			let cellCol = table.children().eq(i).children().eq(2 - i).css('background-color');
			if ( rgb2hex(cellCol) === player1.color){
				count1++;
				if (count1 === 3){
					win = true;
				}
			} else if ( rgb2hex(cellCol) === player2.color){
				count2++;
				if (count2 === 3){
					win = true;
				}
			}
		}
		return win;
	}

	function updateWins(){
		$(".Wins").eq(0).text("Player 1: " + player1.wins); 
		$(".Wins").eq(1).text("Player 2: " + player2.wins); 
	}
	makeGrid();
	updateWins();

});

function Player(color) {
	this.color = color;
	this.wins = 0;
}

/* not mine */

function rgb2hex(rgb) {
	if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
	rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
