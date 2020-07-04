define( function() {
	var overlay  = document.getElementById( 'overlay' );
    return {
        show: function() {
            overlay.style.display = 'block';
			window.requestAnimationFrame( function() {
				overlay.className = 'show';
			} );
        },
        hide: function() {
            overlay.className = '';
            window.setTimeout( function() {
                overlay.style.display = 'none';
            }, 400 );
        }
    };
} );
