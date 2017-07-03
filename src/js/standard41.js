require( ['jquery', './ui/tabs', './ui/method_table', './ui/practice'], function( $, tabs, method_table, practice ) {
	// Update viewport meta tag on orientation change to set a minimum viewport size when viewing on a small screen device
	$(window).on( 'orientationchange resize', function() {
		$( '#viewport' ).attr( 'content',(window.innerWidth < 440)? 'width=440' : 'width=device-width' );
	} );
} );