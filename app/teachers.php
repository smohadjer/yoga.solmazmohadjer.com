<?php
	include('include/head.php');
	$id = isset($_GET['id']) ? $_GET['id'] : null;
?>
	<body>
		<?php include('include/header.php'); ?>
		<div class="main teachers clearfix" role="main">
		<?php
			foreach(glob('content/html/teacher/*.html') as $file) {
				if ($id) {
					if (strpos($file, $id) !== false) {
						include($file);
					}
				} else {
					include($file);
				}
			}
		?>
		</div>
		<?php include('include/footer.php'); ?>
		<?php include('include/scripts.php'); ?>
		<script>
			var $uls = document.querySelectorAll('div.teachers ul.list');
			if ($uls) {
				[...$uls].forEach(function(ul, key) {
					var url = ul.getAttribute('data-api');
					var request = new XMLHttpRequest();
					request.open('GET', url, true);
					request.onload = function() {
						if (request.status >= 200 && request.status < 400) {
							var resp = request.responseText;
							if (resp.length > 0) {
								ul.parentNode.classList.remove('hidden');
							}
							ul.innerHTML = resp;
							if (ul.querySelector('li') === null) {
								ul.parentNode.classList.add('teacher__section--empty');
							}
						} else {
							// We reached our target server, but it returned an error
							console.log(request.status);
						}
					};

					request.onerror = function() {
					  // There was a connection error of some sort
					};
					request.send();
				});
			}
		</script>
    </body>
</html>
