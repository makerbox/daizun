<?php
// load bundled scripts from webpack bundle minified
function load_child_bundled_js(){
	wp_enqueue_script('child_bundled_js', get_stylesheet_directory_uri() . '/dist/bundle.min.js', false, false ,true);
	$translation_array = array( 'templateUrl' => get_stylesheet_directory_uri() );
	wp_localize_script( 'child_bundled_js', 'wp_obj', $translation_array );
	wp_enqueue_style('child_bundled_css', get_stylesheet_directory_uri() . '/dist/bundle.css');
}
add_action( 'wp_enqueue_scripts', 'load_child_bundled_js', 20 );




function allow_styles_for_editor() {
	add_theme_support( 'editor-styles' );
    add_editor_style( '/dist/bundle.css' );
}
add_action( 'after_setup_theme', 'allow_styles_for_editor' );



// register footer menu
function footer_menu() {
  register_nav_menu('footer-menu',__( 'Footer Menu' ));
}
add_action( 'init', 'footer_menu' );


// get Green Sock
function get_greensock(){
	wp_enqueue_script('clubgreensock', get_stylesheet_directory_uri() . '/src/js/gsap-business-green/minified/gsap.min.js', array(), false, true);
	wp_enqueue_script('clubgreensock-scrolltrigger', get_stylesheet_directory_uri() . '/src/js/gsap-business-green/minified/ScrollTrigger.min.js', array(), false, true);
	wp_enqueue_script('clubgreensock-scrollsmoother', get_stylesheet_directory_uri() . '/src/js/gsap-business-green/minified/ScrollSmoother.min.js', array(), false, true);
	wp_enqueue_script('clubgreensock-scrolltoplugin', get_stylesheet_directory_uri() . '/src/js/gsap-business-green/minified/ScrollToPlugin.min.js', array(), false, true);
}
add_action('wp_enqueue_scripts', 'get_greensock');