define( ['jquery', '../data', '../lib/LocalStorage'], function( $, data, localStorage ) {
    var $settings = $( '#content_settings' );

    // Set up the settings page
    ['Cambridge', 'Norwich', 'London', 'Carlisle'].forEach( function( over ) {
        $settings
            .append( '<h1>'+over+' over methods</h1>' )
            .append( '<ul><li id="setting_enable_super_'+over+'" class="super">Select all</li>' + Object.values(data)
                .filter( function( m ) { return m.over === over; } )
                .map( function( m ) { return '<li id="setting_enable_'+m.id+'" class="'+((localStorage.getSetting('setting_enable_'+m.id, true))?'enabled':'disabled')+'">'+m.name.replace(' Surprise Minor', '')+' <span class="aside">'+m.over+' over '+m.under+', '+m.hl+' hl, '+m.le+' le</span></li>' } )
                .sort()
                .join( '' ) + '</ul>' );
    } );

    var setSuperStatus = function() {
        ['Cambridge', 'Norwich', 'London', 'Carlisle'].forEach( function( over ) {
            $( '#setting_enable_super_'+over )
                .removeClass( 'enabled disabled' )
                .addClass( (Object.values(data).filter( function( m ) { return m.over === over; } ).reduce( function(p,c) { return p && localStorage.getSetting('setting_enable_'+c.id, true); }, true))?'enabled':'disabled' );
        } );
    };
    setSuperStatus();

    // Listen for clicks and adjust settings
    $settings.click( function( e ) {
        $target_li = $( e.target ).closest( 'li' );
        if( $target_li.length > 0 ) {
            // Listen for clicks on super <li>s
            if( $target_li.attr('id').slice(0,20) == 'setting_enable_super' ) {
                var over = $target_li.attr('id').slice(21),
                    super_enabled = $target_li.hasClass( 'enabled' );
                Object.values(data)
                    .filter( function( m ) { return m.over === over; } )
                    .map( function( m ) {
                        if( super_enabled ) {
                            $target_li.removeClass( 'enabled' ).addClass( 'disabled' );
                            $( '#setting_enable_'+m.id ).removeClass( 'enabled' ).addClass( 'disabled' );
                            localStorage.setSetting('setting_enable_'+m.id, false);
                        }
                        else {
                            $target_li.removeClass( 'disabled' ).addClass( 'enabled' );
                            $( '#setting_enable_'+m.id ).removeClass( 'disabled' ).addClass( 'enabled' );
                            localStorage.setSetting('setting_enable_'+m.id, true);
                        }
                    } );
            }
            // Listen for clicks on method <li>s
            else if( $target_li.attr('id').slice(0,14) == 'setting_enable' ) {
                var method_enabled = $target_li.hasClass( 'enabled' );
                if( method_enabled ) {
                    $target_li.removeClass( 'enabled' ).addClass( 'disabled' );
                    localStorage.setSetting( $target_li.attr('id'), false );
                    $target_li.prevAll( 'li.super:first' ).removeClass( 'enabled' ).addClass( 'disabled' );
                }
                else {
                    $target_li.removeClass( 'disabled' ).addClass( 'enabled' );
                    localStorage.setSetting( $target_li.attr('id'), true );
                    setSuperStatus();
                }
            }
            e.stopPropagation();
        }
    } );
} );
