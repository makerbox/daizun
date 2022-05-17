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
		<div class="p-header__menu">
			<nav class="p-header__menu--menu">
				<?php wp_nav_menu( array( 
				'theme_location' => 'main-menu'
				) ); ?>	
			</nav>
		</div>
	</div>
</header>
<body <?php body_class(); ?>>

	

	<!-- home-banner | page-banner (contact us)
			(home-banner innerblock) stats-slider
	image-text
	background-text
	text-cta-slider (colours switchable)
		text-cta-slide
	case-studies
		case-study
	tabs-banner
		tab
	footer

	contact (block with form innerblock?)
	 -->