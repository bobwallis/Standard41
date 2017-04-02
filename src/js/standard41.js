require( ['jquery', 'lib/fittext'], function( $, fittext ) {
	// Update viewport meta tag on orientation change to set a minimum viewport size when viewing on a small screen device
	$(window).on( 'orientationchange resize', function() {
		$( '#viewport' ).attr( 'content',(window.innerWidth < 440)? 'width=440' : 'width=device-width' );
	} );
	
	// Scale headers
	$( 'h1' ).fitText( 1.2, { minFontSize: '32px', maxFontSize: '40px' } );
} );