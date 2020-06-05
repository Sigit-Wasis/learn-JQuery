// memastikan file sudah diload dengan sempurna
$(document).ready(function(){

	var index = 0,
		items = $('.container div'),
		// get total div pada container
		total = items.length;

	// fungsi slide
	function slide() {
		var item = $('.container div').eq(index);
		items.hide();
		item.css('display', 'block');
	}

	// setInterval akan menjalankan fungsi sesuai waktu yang disetting
	var autoslide = setInterval(function() {
		index += 1;
		if (index > total - 1) index = 0;
		slide();
	}, 1500);

});