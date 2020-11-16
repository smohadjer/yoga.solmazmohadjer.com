		<?php
			$filename = basename($_SERVER['PHP_SELF']);
		?>
		<header class="clearfix">
			<a class="logo-icon" href="index.php"><img width="60" src="content/images/logo.svg" alt="Home" /></a>
			<?php include('content/html/logo.html'); ?>
				<nav>
					<ul class="clearfix">
						<li <?php if ($filename == 'index.php') echo 'class="selected"' ?>><a href="index.php">Home</a></li>
						<li <?php if ($filename == 'schedule.php') echo 'class="selected"' ?>><a href="schedule.php">Schedule</a></li>
						<li <?php if ($filename == 'classes.php') echo 'class="selected"' ?>><a href="classes.php"> Classes</a></li>
						<li <?php if ($filename == 'teachers.php') echo 'class="selected"' ?>><a href="teachers.php">Teachers</a></li>
						<li <?php if ($filename == 'resources.php') echo 'class="selected"' ?>><a href="resources.php">Resources</a></li>
					</ul>
				</nav>
		</header>
