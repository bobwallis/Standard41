define( ['jquery', './overlay', '../data', '../lib/shuffle'], function( $, overlay, data, shuffle ) {
    var data_array = Object.values(data),
        overWorks = ['Cambridge', 'Norwich', 'London', 'Carlisle'],
        underWorks = ['Cambridge', 'Surfleet', 'Beverley', 'Norwich', 'Westminster', 'Allendale', 'Kelso', 'London', 'Wells'],
        $content_quiz = $( '#content_quiz' ),
        $quiz_testMethod = $( '#quiz_testMethod' ),
        $quiz_le2 = $( '#quiz_le li:first-child' ),
        $quiz_le6 = $( '#quiz_le li:last-child' ),
        $quiz_over = $( '#quiz_over' ),
        $quiz_under = $( '#quiz_under' ),
        $quiz_hl16 = $( '#quiz_hl li:first-child' ),
        $quiz_hl36 = $( '#quiz_hl li:eq(1)' ),
        $quiz_hl56 = $( '#quiz_hl li:last-child' );

    var generateQuestion = function() {
        var method = data_array[Math.round(0.5 + (Math.random() * 41))-1];

        $quiz_testMethod.html( method.short_name );

        $quiz_le2.data( 'answer', method.le === '12' ).removeClass( 'correct disabled' );
        $quiz_le6.data( 'answer', method.le === '16' ).removeClass( 'correct disabled' );

        shuffle(overWorks);
        var method_overWorks = overWorks.slice(0, 3);
        if( method_overWorks.indexOf( method.over ) === -1 ) {
            method_overWorks[Math.round(0.5 + (Math.random() * 3))-1] = method.over;
        }
        $quiz_over.empty();
        method_overWorks.forEach( function( e ) {
            $quiz_over.append( '<li>'+e+'</li>' ).children().last().data( 'answer', e === method.over);
        } );

        shuffle(underWorks);
        var method_underWorks = underWorks.slice(0, 3);
        if( method_underWorks.indexOf( method.under ) === -1 ) {
            method_underWorks[Math.round(0.5 + (Math.random() * 3))-1] = method.under;
        }
        $quiz_under.empty();
        method_underWorks.forEach( function( e ) {
            $quiz_under.append( '<li>'+e+'</li>' ).children().last().data( 'answer', e === method.under);
        } );

        $quiz_hl16.data( 'answer', method.hl === '16' ).removeClass( 'correct disabled' );
        $quiz_hl36.data( 'answer', method.hl === '36' ).removeClass( 'correct disabled' );
        $quiz_hl56.data( 'answer', method.hl === '56' ).removeClass( 'correct disabled' );
    };
    generateQuestion();

    $content_quiz.click( function( e ) {
        $target_li = $( e.target ).closest( 'li' );
        if( $target_li.length > 0 ) {
            if( $target_li.data('answer') === true ) {
                $target_li.addClass( 'correct' ).data( 'answer', undefined )
                    .siblings().addClass( 'disabled' ).data( 'answer', undefined );
            }
            else if( $target_li.data('answer') === false ) {
                $target_li.addClass( 'disabled' ).data( 'answer', undefined );
            }
            if( $( '#content_quiz li.correct' ).length === 4 ) {
                generateQuestion();
            }
            e.stopPropagation();
        }
    } );

} );
