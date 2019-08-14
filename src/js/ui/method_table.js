define( ['jquery', '../data', './overlay'], function( $, data, overlay ) {
	var $document = $( document ),
		$window   = $( window ),
        $blueline = $( '#blueline' ),
        $blueline_overflow = $( '#blueline_overflow' );

    // Open/close a blueline for the relevant method when clicked
	var $cell, $cell_offset = { top: 0, left: 0 }, $cell_width = 0, $cell_height = 0;
	var openBlueline = function( e ) {
		// Stop the default event
		e.preventDefault();
		e.stopPropagation();
		// Find the cell that we want to zoom into a blue line, and get its position
		$cell = $( e.target ).closest( 'td' );
		$cell_offset = $cell.offset();
		$cell_width  = $cell.outerWidth();
		$cell_height = $cell.outerHeight();
		// Work out what was clicked
		var method = $cell.data( 'method' );
		if( typeof method !== 'undefined' ) {
			// Initially position the blueline container over the cell
			$blueline.empty()
				.show()
				.removeClass( 'open' )
				.css( {
					'transition-property': 'none',
					transform: 'scale('+($cell_width/800)+','+($cell_height/533)+') translate(0,0)',
					top:  Math.round($cell_offset.top)+'px',
					left: Math.round($cell_offset.left)+'px'
				} )
				.append(
					'<h1>'+data[method].name+'</h1>',
					'<h2>'+data[method].over+' with a '+data[method].le+' lead-end over '+data[method].under+' with a '+data[method].hl+' half-lead</h2>',
					data[method].grid_course.draw(),
					data[method].grid_lead.draw()
				);
			// display:block the blueline container and show the overlay
			$blueline_overflow.show();
			overlay.show();
			// Tick the event loop so the changes process
			window.requestAnimationFrame( function() {
				// Calculate the appropriate end-state width/height for the blueline
				var width  = Math.min( $window.width(), 610 ),
					height = width*435/610;
				// Scale up
				$blueline.css( {
						'transition-property': 'all',
						transform: 'scale('+(width/610)+','+(height/435)+') translate('+Math.round((610/width)*(($window.width() - width )/ 2 - $cell_offset.left))+'px,'+Math.round((435/height)*(($window.height() - height) / 2 - $cell_offset.top))+'px)',
					} )
					.addClass( 'open' );
			} );
		}
	};
	var closeBlueline = function() {
		$blueline.removeClass( 'open' )
			.css( 'transform', 'scale('+($cell_width/610)+','+($cell_height/435)+') translate(0,0)' );
		overlay.hide();
		window.setTimeout( function() {
			$blueline.hide();
			$blueline_overflow.hide();
		}, 400 );
	};
	$( '#method_table' ).on( 'click', 'a, td', openBlueline );
	$( '#overlay, #blueline_overflow' ).on( 'click', closeBlueline );
	$document.keyup( function( e ) { if( e.keyCode === 27 ) { closeBlueline(); } } );
} );