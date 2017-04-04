require( ['jquery', 'lib/fittext'], function( $, fittext ) {
	// Update viewport meta tag on orientation change to set a minimum viewport size when viewing on a small screen device
	$(window).on( 'orientationchange resize', function() {
		$( '#viewport' ).attr( 'content',(window.innerWidth < 440)? 'width=440' : 'width=device-width' );
	} );
	
	// Scale headers
	$( 'h1' ).fitText( 1.2, { minFontSize: '18px', maxFontSize: '28px' } );

	// Tab bar
	var allTabsAndContents = $( '#tabs > li, #contents > div' );
	$('#tabs').on( 'click' , 'li', function( e ) {
		var activeID = e.target.id.replace( /^tab_/, '' );
		if( activeID === 'github' ) {
			location.href = 'https://github.com/bobwallis/Standard41';
		}
		else {
			allTabsAndContents.removeClass( 'active' );
			$( '#tab_'+activeID+', #content_'+activeID ).addClass( 'active' );
		}
	} );
} );