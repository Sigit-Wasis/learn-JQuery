// memastikan file sudah diload dengan sempurna
$(document).ready(function(){

	// dengan parameter yang isinya angka
	function slide(num) {
		// jika container marginleftnya mentok disebelahkanan maka kembali ke 0px\
		if ($('.container').css('marginLeft') == '-1600px')
			$('.container').css('marginLeft', '0px');
		else
			$('.container').animate({ marginLeft: num });
	}

	// setInterval akan menjalankan fungsi sesuai waktu yang disetting ex: 1500
	var autoslide = setInterval(function() {
		// -= mengambil nilai yang lama dikurangi 400px
		slide('-=400px');
	}, 2000);

	// Menggunakan Button Next
	$('#next').click(function(){
		// menjalankan fungsi slide
		slide('-=400px');
		// clearInterval menghapus autoslide jika di klik next
		clearInterval(autoslide);
	});

	// Menggunakan Button Prev
	$('#prev').click(function(){
		// jika berada pada 0px maka dapat dibuat pada image terakhir atau sebelum terakhir
		if ($('.container').css('marginLeft') == '0px')
			$('.container').css('marginLeft', '-1200px');
		else
			// menjalankan fungsi slide
			slide('+=400px');
			// clearInterval menghapus autoslide jika di klik prev
			clearInterval(autoslide);
	});
});