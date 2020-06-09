<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Ajax dengan Javascript</title>
	<link rel="stylesheet" href="">
</head>
<body>

	<script type="text/javascript">
		
		function load_ajax(url, callback) {

			// buat objek xmlhttprequest
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = cekStatus;
		}

		// memanggil otomatis
		load_ajax('url', 'callback');
	</script>
	
</body>
</html>