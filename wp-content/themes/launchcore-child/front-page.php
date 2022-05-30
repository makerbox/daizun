<?php
	get_header();
?>

<div class="t-front-page" data-smooth-wrapper>
	<div data-smooth-content>
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<?php the_content(); ?>
		<?php endwhile; endif; ?>
	</div>
</div>

<?php
	get_footer();
?>