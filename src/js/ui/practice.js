define( ['jquery', './overlay', '../data', '../lib/RingingPractice', '../lib/PlaceNotation'], function( $, overlay, data, RingingPractice, PlaceNotation ) {
    var $document = $( document ),
        $window   = $( window );

    var addOrdinalIndicator = function( i ) {
        i = parseInt( i+'', 10 );
        return i + ((i%10 === 1 && i%100 !== 11)? 'st' : (i%10 === 2 && i%100 !== 12)? 'nd' : (i%10 === 3 && i%100 !== 13)? 'rd' : 'th');
    };

    // Change display when the underlying radio buttons change
    var $practice_chooser_type_specific_extra = $( '#practice_chooser_type_specific_extra' );
	$( '#content_practice ul.tab_group input[type=radio]' ).on( 'change', function( e ) {
        // Generic change code
        var $target = $( e.target );
        $target.parent().siblings().removeClass( 'active' );
        $target.parent().addClass( 'active' );

        // Show/hide the extra options if the 'type' radio is clicked
        if( $target.attr( 'name' ) === 'practice_chooser_type' ) {
            if( $target.attr( 'value' ) === 'specific' ) {
                $practice_chooser_type_specific_extra.css( 'visibility', 'visible' );
                window.setTimeout( function() { $practice_chooser_type_specific_extra.addClass( 'active' ); }, 1 );
            }
            else {
                $practice_chooser_type_specific_extra.removeClass( 'active' );
                window.setTimeout( function() { $practice_chooser_type_specific_extra.css( 'visibility', 'hidden' ); }, 400 );
            }
        }
    } );

    // Launch a practice interface when the Go button is clicked
    var $practice_overflow = $( '#practice_overflow' ),
        $practice = $( '#practice_interface' );
    var openPractice = function( e ) {
		// Stop the default event
		e.preventDefault();
		e.stopPropagation();

        var option_type = $( 'input[name="practice_chooser_type"]:checked' ).val(),
            option_method, option_placeStart, option_leadOrCourse, option_title, option_notation, option_overlayMessages, option_thatsAll, option_rows;

        // Read options
        if( option_type === 'specific' ) {
            // User has selected a specific method, so use that
            option_method = $( '#practice_chooser_method' ).val();
            option_placeStart = parseInt( $( 'input[name="practice_chooser_bell"]:checked' ).val(), 10 );
            option_leadOrCourse = $( 'input[name="practice_chooser_leadOrCourse"]:checked' ).val();
            option_title = (option_leadOrCourse === 'course')? data[option_method].name : addOrdinalIndicator(option_placeStart)+'s place '+data[option_method].name.replace( ' Surprise Minor', '' );
            option_notation = data[option_method].notation;
            option_overlayMessages = { 0: option_title };
            option_thatsAll = (option_leadOrCourse === 'course')? "That's all" : ' ';
            option_rows = (option_leadOrCourse === 'course')? 120 : 24;
        }
        else {
            // Generate 200 random leads and start from a random place bell
            option_placeStart = Math.floor(Math.random() * 5) + 2;
            option_title = 'Random leads';
            option_notation = [];
            option_overlayMessages = {};
            option_thatsAll = "That's all";
            option_rows = 24*250;
            for( var i = 0; i < 250; ++i ) {
                option_method = $( '#practice_chooser_method option:eq('+Math.floor(Math.random() * 41)+')' ).val();
                option_notation = option_notation.concat( PlaceNotation.parse( PlaceNotation.expand( data[option_method].notation, 6 ), 6 ) );
                option_overlayMessages[(i*24)+1] = data[option_method].name.replace( ' Surprise Minor', '' );
            }
        }
        var lineOptions = [{ color: '#D11', width: 2 }, null, null, null, null, null];
        lineOptions[option_placeStart-1] = { color: '#11D', width: 4 };

        // Create the practice interface
        RingingPractice( {
            title: option_title,
            notation: option_notation,
            stage: 6,
            autostart: true,
            buttons: [{ text: 'Close', callback: closePractice }],
            overlayMessages: option_overlayMessages,
            following: option_placeStart-1,
            lines: lineOptions,
            ruleOffs: { from: 0, every: 12 },
            placeStarts: { from: 0, every: 24 },
            introduction: true,
            score: true,
            thatsAll: option_thatsAll,
            finishRow: option_rows,
            container: 'practice_interface',
            height: Math.min( 400, $window.height() ),
            width: Math.min( 320, $window.width() )
        } );

        // Show the practice interface
        $practice.css( 'transform-origin', '50% '+($( '#practice_chooser_go' ).offset().top - Math.max(0, ($window.height() - 400)/2) - $window.scrollTop() + 17.5)+'px' )
            .removeClass( 'open' );
		$practice_overflow.addClass( 'open' );
		overlay.show();
		window.requestAnimationFrame( function() {
			$practice.addClass( 'open' );
		} );
    };
    var closePractice = function() {
		$practice.css( 'transform-origin', '50% '+($( '#practice_chooser_go' ).offset().top - Math.max(0, ($window.height() - 400)/2) - $window.scrollTop() + 17.5)+'px' )
            .removeClass( 'open' );
		overlay.hide();
		window.setTimeout( function() {
			$practice_overflow.removeClass( 'open' );
		}, 425 );
    };

    $( '#practice_chooser_go button' ).on( 'click', openPractice );
	$( '#overlay' ).on( 'click', closePractice );
	$document.keyup( function( e ) { if( e.keyCode === 27 ) { closePractice(); } } );
} );
