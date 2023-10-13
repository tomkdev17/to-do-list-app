function newItem(){

	let list = $('#list');
	let li = $('<li></li>');
	let inputValue = $('#input').val();

	if (inputValue === ''){
		alert('You must have something to do!');
	} else {
		li.append(inputValue);
		list.append(li);
	}

	function crossOut() {
		li.toggleClass('strike');
	}

	li.on('dblclick', crossOut);

	let crossOutButton = $('<button>X</button>');
	li.append(crossOutButton);

	function deleteToDo(){
		li.addClass('delete');
	}

	crossOutButton.on('click', deleteToDo);

	$(list).sortable();

}