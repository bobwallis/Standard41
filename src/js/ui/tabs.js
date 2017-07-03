define( ['jquery'], function( $ ) {
	var $tabs = $( '#tabs' ),
    allTabsAndContents = $( '#tabs > li, #contents > div' );
	$tabs.on( 'click' , 'li', function( e ) {
		var activeID = e.target.id.replace( /^tab_/, '' );
		if( activeID === 'github' ) {
			location.href = 'https://github.com/bobwallis/Standard41';
		}
		else {
			allTabsAndContents.removeClass( 'active' );
			$( '#tab_'+activeID+', #content_'+activeID ).addClass( 'active' );
		}
	} );
    return $tabs;
} );