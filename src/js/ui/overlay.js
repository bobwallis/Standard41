define( ['jquery'], function( $ ) {
	var $overlay  = $( '#overlay' );
    return {
        show: function() {
            $overlay.show();
			window.requestAnimationFrame( function() {
				$overlay.addClass( 'show' );
			} );
        },
        hide: function() {
            $overlay.removeClass( 'show' );
            window.setTimeout( function() {
                $overlay.hide();
            }, 400 );
        }
    };
} );