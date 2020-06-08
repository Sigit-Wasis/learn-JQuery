// memastikan file sudah diload dengan sempurna
$(document).ready(function(){

	var index = 0,
		items = $('.container div'),
		// get total div pada container
		total = items.length;

	// fungsi slide
	function slide() {
		var item = $('.container div').eq(index);
		// item yang tidak sesuai dengan index akan terhide
		items.hide();
		// jika ingin efek slide ke atas maka gunakan slideUp
		// items.slideUp();
		// jika ingin efek slide ke bawah maka gunakan slideDown
		// items.slideDown();
		// setiap item sesuai index maka akan muncul hanya 1 image
		item.css('display', 'block');
	}

	// setInterval akan menjalankan fungsi sesuai waktu yang disetting ex: 1500
	var autoslide = setInterval(function() {
		index += 1;
		// jika index melebihi total maka dikurang 1 dan dimulai dari index 0
		if (index > total - 1) index = 0;
		// menjalankan fungsi slide
		slide();
	}, 2000);


	// Menggunakan Button Next
	$('#next').click(function(){
		index += 1;
		// jika index melebihi total maka dikurang 1 dan dimulai dari index 0
		if (index > total - 1) index = 0;
		// menjalankan fungsi slide
		slide();
	});

	// Menggunakan Button Prev
	$('#prev').click(function(){
		index -= 1;
		if (index < 0) index - 1;
		// menjalankan fungsi slide
		slide();
	});

});