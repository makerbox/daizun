<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width" />
	<!-- fontawesome (comment out if not used to avoid uneccessary load) -->
	<!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"> -->
	<?php wp_head(); ?>
</head>

<header class="p-header">
	<div class="p-header__inner">
		<div class="p-header__logo">
			<?php the_custom_logo(); ?>
		</div>
		<div class="p-header__menu" data-nav-menu>
			<nav class="p-header__menu--menu">
				<?php wp_nav_menu( array( 
				'theme_location' => 'main-menu'
				) ); ?>	
			</nav>
			<div class="p-header__mobile p-header__menu--toggle" data-nav-toggle>
				<div class="p-header__menu--open">
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="11" viewBox="0 0 25 11">
					  <g id="Group_350" data-name="Group 350" transform="translate(-333 -21.5)">
					    <line id="Line_3" data-name="Line 3" x2="25" transform="translate(333 22)" fill="none" stroke="#fff" stroke-width="1"/>
					    <line id="Line_11" data-name="Line 11" x2="25" transform="translate(333 27)" fill="none" stroke="#fff" stroke-width="1"/>
					    <line id="Line_12" data-name="Line 12" x2="25" transform="translate(333 32)" fill="none" stroke="#fff" stroke-width="1"/>
					  </g>
					</svg>
				</div>
				<div class="p-header__menu--close">
					<svg xmlns="http://www.w3.org/2000/svg" width="25.707" height="25.707" viewBox="0 0 25.707 25.707">
					  <g id="Group_350" data-name="Group 350" transform="translate(-332.646 -21.646)">
					    <line id="Line_3" data-name="Line 3" x2="25" y2="25" transform="translate(333 22)" fill="none" stroke="#fff" stroke-width="1"/>
					    <line id="Line_12" data-name="Line 12" y1="24" x2="24" transform="translate(334 22)" fill="none" stroke="#fff" stroke-width="1"/>
					  </g>
					</svg>
				</div>
			</div>
		</div>
	</div>
</header>
<body <?php body_class(); ?>>
	<div data-smooth-wrapper>
		<div data-smooth-content>