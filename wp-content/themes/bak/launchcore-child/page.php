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
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 391.52 255"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_7" data-name="Layer 7"><text class="cls-1" transform="translate(12.59 216.66)">INV<tspan class="cls-2" x="102.17" y="0">E</tspan><tspan class="cls-3" x="135.18" y="0">S</tspan><tspan class="cls-4" x="168.33" y="0">T</tspan><tspan x="198.61" y="0">MEN</tspan><tspan class="cls-5" x="314.78" y="0">T</tspan><tspan x="345.78" y="0">S</tspan></text></g><g id="Layer_9" data-name="Layer 9"><path class="cls-6" d="M159.57,123.92a4.62,4.62,0,1,1,4.66,4.57A4.6,4.6,0,0,1,159.57,123.92Z"/><path class="cls-6" d="M159.57,134.9a4.62,4.62,0,1,1,4.66,4.56A4.61,4.61,0,0,1,159.57,134.9Z"/><path class="cls-7" d="M59.94,62.75a2.31,2.31,0,1,0-.34-3.25A2.31,2.31,0,0,0,59.94,62.75Z"/><path class="cls-7" d="M67.52,55.21A2.31,2.31,0,1,0,67.43,52,2.31,2.31,0,0,0,67.52,55.21Z"/><path class="cls-7" d="M73.23,48.18a2.31,2.31,0,1,0,.16-3.26A2.31,2.31,0,0,0,73.23,48.18Z"/><path class="cls-7" d="M80.66,41.68a2.3,2.3,0,1,0,3.63-2.84,2.3,2.3,0,1,0-3.63,2.84Z"/><path class="cls-7" d="M88.55,35.75a2.31,2.31,0,1,0,.64-3.2A2.3,2.3,0,0,0,88.55,35.75Z"/><path class="cls-7" d="M96.86,30.43a2.31,2.31,0,1,0,.88-3.14A2.31,2.31,0,0,0,96.86,30.43Z"/><path class="cls-7" d="M105.55,25.74a2.31,2.31,0,1,0,1.11-3.06A2.3,2.3,0,0,0,105.55,25.74Z"/><path class="cls-7" d="M114.56,21.72a2.31,2.31,0,1,0,1.34-3A2.32,2.32,0,0,0,114.56,21.72Z"/><path class="cls-7" d="M123.85,18.38a2.31,2.31,0,1,0,1.55-2.87A2.31,2.31,0,0,0,123.85,18.38Z"/><path class="cls-7" d="M133.36,15.75A2.31,2.31,0,1,0,135.13,13,2.31,2.31,0,0,0,133.36,15.75Z"/><path class="cls-7" d="M143,13.83a2.31,2.31,0,1,0,2-2.6A2.32,2.32,0,0,0,143,13.83Z"/><path class="cls-7" d="M152.84,12.64A2.3,2.3,0,1,0,155,10.19,2.31,2.31,0,0,0,152.84,12.64Z"/><path class="cls-7" d="M162.15,12.19a2.31,2.31,0,1,0,2.34-2.28A2.3,2.3,0,0,0,162.15,12.19Z"/><path class="cls-7" d="M51.88,55.25a1.39,1.39,0,1,0-.2-2A1.39,1.39,0,0,0,51.88,55.25Z"/><path class="cls-7" d="M58.28,47.75a1.38,1.38,0,0,0,1.89-2,1.38,1.38,0,1,0-1.89,2Z"/><path class="cls-7" d="M65.18,40.72a1.38,1.38,0,1,0,.07-2A1.38,1.38,0,0,0,65.18,40.72Z"/><path class="cls-7" d="M72.54,34.17a1.39,1.39,0,1,0,.21-1.94A1.38,1.38,0,0,0,72.54,34.17Z"/><path class="cls-7" d="M80.35,28.16a1.38,1.38,0,1,0,2.26-1.59,1.38,1.38,0,1,0-2.26,1.59Z"/><path class="cls-7" d="M88.54,22.69a1.39,1.39,0,1,0,.48-1.9A1.39,1.39,0,0,0,88.54,22.69Z"/><path class="cls-7" d="M97.1,17.8a1.38,1.38,0,1,0,.6-1.86A1.38,1.38,0,0,0,97.1,17.8Z"/><path class="cls-7" d="M106,13.51a1.38,1.38,0,1,0,.73-1.81A1.38,1.38,0,0,0,106,13.51Z"/><path class="cls-7" d="M115.12,9.85A1.38,1.38,0,1,0,116,8.09,1.38,1.38,0,0,0,115.12,9.85Z"/><path class="cls-7" d="M124.5,6.83a1.38,1.38,0,1,0,1-1.7A1.39,1.39,0,0,0,124.5,6.83Z"/><path class="cls-7" d="M134.06,4.46a1.39,1.39,0,1,0,1.09-1.63A1.38,1.38,0,0,0,134.06,4.46Z"/><path class="cls-7" d="M143.77,2.75A1.38,1.38,0,1,0,145,1.2,1.38,1.38,0,0,0,143.77,2.75Z"/><path class="cls-7" d="M153.57,1.72a1.38,1.38,0,1,0,1.3-1.46A1.38,1.38,0,0,0,153.57,1.72Z"/><path class="cls-7" d="M163.41,1.37a1.39,1.39,0,0,0,2.77,0,1.39,1.39,0,1,0-2.77,0Z"/><path class="cls-7" d="M54.14,70.74a2.31,2.31,0,1,0-.57-3.21A2.3,2.3,0,0,0,54.14,70.74Z"/><path class="cls-6" d="M159.57,113a4.62,4.62,0,1,0,4.66-4.57A4.6,4.6,0,0,0,159.57,113Z"/><path class="cls-6" d="M160,101.71a4.39,4.39,0,1,0,4.43-4.33A4.39,4.39,0,0,0,160,101.71Z"/><path class="cls-6" d="M159.57,167.9a4.62,4.62,0,1,1,4.66,4.56A4.6,4.6,0,0,1,159.57,167.9Z"/><path class="cls-6" d="M159.57,156.94a4.62,4.62,0,1,0,4.66-4.57A4.61,4.61,0,0,0,159.57,156.94Z"/><path class="cls-6" d="M160,145.69a4.39,4.39,0,1,0,4.43-4.33A4.39,4.39,0,0,0,160,145.69Z"/><path class="cls-6" d="M160.45,79.32a3.93,3.93,0,1,0,4-3.89A3.93,3.93,0,0,0,160.45,79.32Z"/><path class="cls-7" d="M141.11,59.22a3.69,3.69,0,1,0,2.82-4.39A3.7,3.7,0,0,0,141.11,59.22Z"/><path class="cls-7" d="M150.52,57.24a3.69,3.69,0,1,0,3.29-4A3.69,3.69,0,0,0,150.52,57.24Z"/><path class="cls-7" d="M160.45,56.36a3.69,3.69,0,1,0,3.73-3.65A3.69,3.69,0,0,0,160.45,56.36Z"/><path class="cls-7" d="M131.7,50.37a3.69,3.69,0,1,0,2.49-4.58A3.69,3.69,0,0,0,131.7,50.37Z"/><path class="cls-7" d="M141.2,47.66a3.69,3.69,0,1,0,2.93-4.32A3.68,3.68,0,0,0,141.2,47.66Z"/><path class="cls-7" d="M150.92,45.91a3.69,3.69,0,1,0,3.35-4A3.69,3.69,0,0,0,150.92,45.91Z"/><path class="cls-7" d="M160.77,45.13a3.69,3.69,0,1,0,3.73-3.65A3.7,3.7,0,0,0,160.77,45.13Z"/><path class="cls-7" d="M70.51,85.62a3.23,3.23,0,1,0-.87-4.48A3.22,3.22,0,0,0,70.51,85.62Z"/><path class="cls-7" d="M76.13,77.53A3.23,3.23,0,1,0,75.67,73,3.24,3.24,0,0,0,76.13,77.53Z"/><path class="cls-7" d="M82.47,70a3.23,3.23,0,1,0-.06-4.56A3.21,3.21,0,0,0,82.47,70Z"/><path class="cls-7" d="M89.45,63a3.23,3.23,0,1,0,.35-4.56A3.23,3.23,0,0,0,89.45,63Z"/><path class="cls-7" d="M97,56.71a3.23,3.23,0,1,0,.77-4.5A3.24,3.24,0,0,0,97,56.71Z"/><path class="cls-7" d="M105.14,51.12a3.23,3.23,0,1,0,1.16-4.42A3.22,3.22,0,0,0,105.14,51.12Z"/><path class="cls-7" d="M113.72,46.27a3.23,3.23,0,1,0,1.55-4.3A3.23,3.23,0,0,0,113.72,46.27Z"/><path class="cls-7" d="M122.7,42.21a3.23,3.23,0,1,0,1.93-4.14A3.23,3.23,0,0,0,122.7,42.21Z"/><path class="cls-7" d="M132,39a3.23,3.23,0,1,0,2.3-3.95A3.24,3.24,0,0,0,132,39Z"/><path class="cls-7" d="M141.57,36.58a3.23,3.23,0,1,0,2.64-3.73A3.23,3.23,0,0,0,141.57,36.58Z"/><path class="cls-7" d="M151.31,35.05a3.23,3.23,0,1,0,3-3.47A3.24,3.24,0,0,0,151.31,35.05Z"/><path class="cls-7" d="M161.15,34.41a3.23,3.23,0,1,0,3.26-3.2A3.23,3.23,0,0,0,161.15,34.41Z"/><path class="cls-7" d="M81.05,56.08a3.23,3.23,0,1,0,.29-4.56A3.24,3.24,0,0,0,81.05,56.08Z"/><path class="cls-7" d="M88.53,49.65a3.23,3.23,0,1,0,.65-4.52A3.23,3.23,0,0,0,88.53,49.65Z"/><path class="cls-7" d="M96.51,43.86a3.23,3.23,0,1,0,1-4.45A3.22,3.22,0,0,0,96.51,43.86Z"/><path class="cls-7" d="M104.93,38.74a3.23,3.23,0,1,0,1.37-4.35A3.23,3.23,0,0,0,104.93,38.74Z"/><path class="cls-7" d="M113.74,34.32a3.23,3.23,0,1,0,1.72-4.23A3.22,3.22,0,0,0,113.74,34.32Z"/><path class="cls-7" d="M122.88,30.64a3.23,3.23,0,1,0,2.06-4.08A3.23,3.23,0,0,0,122.88,30.64Z"/><path class="cls-7" d="M132.29,27.71a3.23,3.23,0,1,0,2.39-3.9A3.23,3.23,0,0,0,132.29,27.71Z"/><path class="cls-7" d="M141.9,25.55a3.23,3.23,0,1,0,2.71-3.68A3.22,3.22,0,0,0,141.9,25.55Z"/><path class="cls-7" d="M151.67,24.19a3.23,3.23,0,1,0,3-3.45A3.23,3.23,0,0,0,151.67,24.19Z"/><path class="cls-7" d="M161.5,23.63a3.24,3.24,0,1,0,3.27-3.19A3.24,3.24,0,0,0,161.5,23.63Z"/><path class="cls-7" d="M268.42,63a2.31,2.31,0,1,1,.33-3.24A2.31,2.31,0,0,1,268.42,63Z"/><path class="cls-7" d="M260.84,55.42a2.31,2.31,0,1,1,.08-3.26A2.3,2.3,0,0,1,260.84,55.42Z"/><path class="cls-7" d="M255.12,48.38a2.3,2.3,0,1,1-.15-3.26A2.3,2.3,0,0,1,255.12,48.38Z"/><path class="cls-7" d="M247.7,41.88a2.31,2.31,0,1,1-.4-3.24A2.3,2.3,0,0,1,247.7,41.88Z"/><path class="cls-7" d="M239.8,36a2.31,2.31,0,1,1-.64-3.2A2.3,2.3,0,0,1,239.8,36Z"/><path class="cls-7" d="M231.49,30.63a2.31,2.31,0,1,1-.88-3.14A2.3,2.3,0,0,1,231.49,30.63Z"/><path class="cls-7" d="M222.8,26a2.3,2.3,0,1,1-1.11-3.07A2.3,2.3,0,0,1,222.8,26Z"/><path class="cls-7" d="M213.79,21.93a2.31,2.31,0,1,1-1.33-3A2.29,2.29,0,0,1,213.79,21.93Z"/><path class="cls-7" d="M204.5,18.59a2.31,2.31,0,0,1-4.42-1.31,2.31,2.31,0,1,1,4.42,1.31Z"/><path class="cls-7" d="M195,16a2.31,2.31,0,1,1-1.76-2.74A2.31,2.31,0,0,1,195,16Z"/><path class="cls-7" d="M185.31,14a2.31,2.31,0,1,1-2-2.61A2.3,2.3,0,0,1,185.31,14Z"/><path class="cls-7" d="M176.06,12.85a2.31,2.31,0,1,1-2.16-2.45A2.3,2.3,0,0,1,176.06,12.85Z"/><path class="cls-7" d="M276.47,55.45a1.38,1.38,0,1,1,.2-1.94A1.38,1.38,0,0,1,276.47,55.45Z"/><path class="cls-7" d="M270.08,48a1.39,1.39,0,1,1,.06-2A1.4,1.4,0,0,1,270.08,48Z"/><path class="cls-7" d="M263.18,40.92a1.38,1.38,0,1,1-.07-2A1.39,1.39,0,0,1,263.18,40.92Z"/><path class="cls-7" d="M255.81,34.38a1.38,1.38,0,1,1-.21-2A1.38,1.38,0,0,1,255.81,34.38Z"/><path class="cls-7" d="M248,28.36a1.39,1.39,0,0,1-2.27-1.59A1.39,1.39,0,1,1,248,28.36Z"/><path class="cls-7" d="M239.81,22.9a1.39,1.39,0,0,1-1.9.47,1.38,1.38,0,1,1,1.9-.47Z"/><path class="cls-7" d="M231.25,18a1.38,1.38,0,1,1-.6-1.86A1.38,1.38,0,0,1,231.25,18Z"/><path class="cls-7" d="M222.38,13.72a1.38,1.38,0,1,1-.73-1.81A1.39,1.39,0,0,1,222.38,13.72Z"/><path class="cls-7" d="M213.23,10.06a1.38,1.38,0,1,1-.85-1.76A1.38,1.38,0,0,1,213.23,10.06Z"/><path class="cls-7" d="M203.85,7a1.38,1.38,0,1,1-2.67-.72,1.4,1.4,0,0,1,1.7-1A1.38,1.38,0,0,1,203.85,7Z"/><path class="cls-7" d="M194.29,4.66a1.38,1.38,0,1,1-2.71-.54,1.38,1.38,0,0,1,2.71.54Z"/><path class="cls-7" d="M184.59,3a1.39,1.39,0,1,1-1.2-1.55A1.39,1.39,0,0,1,184.59,3Z"/><path class="cls-7" d="M175.43,1.93a1.38,1.38,0,1,1-1.3-1.46A1.39,1.39,0,0,1,175.43,1.93Z"/><path class="cls-7" d="M274.21,70.94a2.31,2.31,0,1,1,.57-3.21A2.3,2.3,0,0,1,274.21,70.94Z"/><path class="cls-7" d="M187.24,59.43A3.69,3.69,0,1,1,184.42,55,3.69,3.69,0,0,1,187.24,59.43Z"/><path class="cls-7" d="M177.84,57.45a3.69,3.69,0,1,1-3.3-4.05A3.69,3.69,0,0,1,177.84,57.45Z"/><path class="cls-7" d="M196.65,50.58A3.69,3.69,0,1,1,194.17,46,3.69,3.69,0,0,1,196.65,50.58Z"/><path class="cls-7" d="M187.15,47.87a3.69,3.69,0,1,1-2.93-4.32A3.68,3.68,0,0,1,187.15,47.87Z"/><path class="cls-7" d="M177.83,46.12a3.69,3.69,0,1,1-3.35-4A3.7,3.7,0,0,1,177.83,46.12Z"/><path class="cls-7" d="M257.85,85.83a3.23,3.23,0,1,1,.86-4.49A3.23,3.23,0,0,1,257.85,85.83Z"/><path class="cls-7" d="M252.22,77.74a3.23,3.23,0,1,1,.46-4.55A3.24,3.24,0,0,1,252.22,77.74Z"/><path class="cls-7" d="M245.89,70.18a3.23,3.23,0,1,1,.05-4.56A3.24,3.24,0,0,1,245.89,70.18Z"/><path class="cls-7" d="M238.91,63.22a3.23,3.23,0,1,1-.36-4.55A3.23,3.23,0,0,1,238.91,63.22Z"/><path class="cls-7" d="M231.33,56.92a3.23,3.23,0,1,1-.76-4.5A3.23,3.23,0,0,1,231.33,56.92Z"/><path class="cls-7" d="M223.22,51.32a3.23,3.23,0,1,1-1.17-4.41A3.24,3.24,0,0,1,223.22,51.32Z"/><path class="cls-7" d="M214.63,46.47a3.23,3.23,0,1,1-1.55-4.29A3.22,3.22,0,0,1,214.63,46.47Z"/><path class="cls-7" d="M205.65,42.41a3.23,3.23,0,1,1-1.93-4.13A3.23,3.23,0,0,1,205.65,42.41Z"/><path class="cls-7" d="M196.34,39.18a3.23,3.23,0,1,1-2.29-4A3.22,3.22,0,0,1,196.34,39.18Z"/><path class="cls-7" d="M186.78,36.78a3.23,3.23,0,1,1-2.64-3.72A3.24,3.24,0,0,1,186.78,36.78Z"/><path class="cls-7" d="M177.37,35.26a3.23,3.23,0,1,1-3-3.47A3.24,3.24,0,0,1,177.37,35.26Z"/><path class="cls-7" d="M247.3,56.28a3.23,3.23,0,1,1-.28-4.56A3.23,3.23,0,0,1,247.3,56.28Z"/><path class="cls-7" d="M239.82,49.86a3.23,3.23,0,1,1-.65-4.52A3.23,3.23,0,0,1,239.82,49.86Z"/><path class="cls-7" d="M231.85,44.07a3.23,3.23,0,1,1-1-4.45A3.25,3.25,0,0,1,231.85,44.07Z"/><path class="cls-7" d="M223.43,39a3.23,3.23,0,1,1-1.38-4.36A3.23,3.23,0,0,1,223.43,39Z"/><path class="cls-7" d="M214.62,34.53a3.23,3.23,0,1,1-1.73-4.23A3.23,3.23,0,0,1,214.62,34.53Z"/><path class="cls-7" d="M205.48,30.84a3.23,3.23,0,1,1-2.07-4.07A3.24,3.24,0,0,1,205.48,30.84Z"/><path class="cls-7" d="M196.07,27.91a3.23,3.23,0,1,1-2.4-3.89A3.23,3.23,0,0,1,196.07,27.91Z"/><path class="cls-7" d="M186.45,25.76a3.23,3.23,0,1,1-2.7-3.68A3.23,3.23,0,0,1,186.45,25.76Z"/><path class="cls-7" d="M177.29,24.4a3.23,3.23,0,1,1-3-3.45A3.23,3.23,0,0,1,177.29,24.4Z"/><path class="cls-6" d="M44,99.66a33.77,33.77,0,0,1,13.55,2.75,36,36,0,0,1,11.1,7.45A35.38,35.38,0,0,1,76.16,121a34.84,34.84,0,0,1,0,27.25,36.27,36.27,0,0,1-7.45,11.15A34.54,34.54,0,0,1,44,169.66H15.36v-70Zm-1,55.5a20.51,20.51,0,0,0,18.8-28.45,21,21,0,0,0-4.35-6.55,20.26,20.26,0,0,0-14.45-6H30.36v41Z"/><path class="cls-6" d="M128.26,157.86h-26.2l-3.8,11.8H82.06l24-70h18.3l23.9,70h-16.1Zm-4.6-14-8.5-26-8.5,26Z"/><path class="cls-6" d="M235.56,155.16v14.5h-53.2V159.07l32.6-45H184V99.66h50V113l-30.7,42.2Z"/><path class="cls-6" d="M303.86,143a27.69,27.69,0,0,1-2.25,11.11,29.34,29.34,0,0,1-6.1,9.09,29,29,0,0,1-9.1,6.2,27.61,27.61,0,0,1-11.25,2.3A28,28,0,0,1,264,169.41a29.41,29.41,0,0,1-9.15-6.09,29,29,0,0,1-6.2-9.11,27.78,27.78,0,0,1-2.3-11.25V99.66h15v43.2a14.35,14.35,0,0,0,1.1,5.55,16.93,16.93,0,0,0,3,4.75,13.94,13.94,0,0,0,4.35,3.35,11.84,11.84,0,0,0,5.4,1.25,11.61,11.61,0,0,0,5.3-1.25,14.62,14.62,0,0,0,4.4-3.35,15.47,15.47,0,0,0,2.95-4.75,14.88,14.88,0,0,0,1.05-5.55V99.66h15Z"/><path class="cls-6" d="M361.46,169.66l-29.8-41.5v41.5h-15v-70h13.8l29.9,41.6V99.66h15v70Z"/></g></g></svg>
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