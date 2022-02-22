<?php
	get_header();
?>
<div class="t-pre">
	
	<div class="t-pre__background">
		<div class="t-pre__background--layer">
			<!-- light blue -->
		</div>
		<div class="t-pre__background--layer" style="background-image: url('<?php echo wp_get_upload_dir()['baseurl']; ?>/2022/02/dots.png');">
			<!-- dots -->
		</div>
	</div>

	<div class="t-pre__foreground">
		<div class="t-pre__logo">
			<?php 
				$custom_logo_id = get_theme_mod( 'custom_logo' );
				$logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );
			?>
			<img class="wp-image-<?php echo $custom_logo_id; ?>" loading="lazy" src="<?php echo esc_url( $logo[0] ); ?>">
		</div>
		<div class="t-pre__intro">
			Capital for property development and seed funding
		</div>
		<div class="t-pre__headline">
			Full site <br>coming soon
		</div>
		<div class="t-pre__paragraph">
			In the meantime we're very much open for business, so do get in touch.
		</div>
		<div class="t-pre__contact">
			<?php echo do_shortcode('[contact-form-7 id="5" title="Contact form 1"]'); ?>
		</div>
	</div>

</div>
<?php
	get_footer();
?>