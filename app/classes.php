<?php
	include('include/head.php');
	$id = isset($_GET['id']) ? $_GET['id'] : null;
?>
	<body>
		<?php include('include/header.php'); ?>

		<div class="main courses clearfix" role="main">
			<?php
				if ($id) {
					foreach(glob('content/html/classes/*.html') as $file) {
						if (strpos($file, $id) !== false) {
							include($file);
						}
					}
				} else {
					foreach(glob('content/html/classes/*.html') as $file) {
						include($file);
					}
				}
			?>
		</div>
		<?php include('include/footer.php'); ?>
		<?php include('include/scripts.php'); ?>
	</body>
</html>
