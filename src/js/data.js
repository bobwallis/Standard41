define( ['lib/GridOptionsBuilder', 'lib/Grid'], function( GridOptionsBuilder, Grid ) {
    var data = {
        Ipswich: {
            id:       'ipswich',
            name:     'Ipswich Surprise Minor',
            notation: 'x36x14x12x36x14x16,12',
            over:     'Cambridge',
            under:    'Cambridge',
            le:       '12',
            hl:       '16'
        },
        Cambridge: {
            id:       'cambridge',
            name:     'Cambridge Surprise Minor',
            notation: 'x36x14x12x36x14x56,12',
            over:     'Cambridge',
            under:    'Cambridge',
            le:       '12',
            hl:       '56'
        },
        Surfleet: {
            id:       'surfleet',
            name:     'Surfleet Surprise Minor',
            notation: 'x36x14x12x36.14x12.56,12',
            over:     'Cambridge',
            under:    'Surfleet',
            le:       '12',
            hl:       '56'
        },
        Beverley: {
            id:       'beverley',
            name:     'Beverley Surprise Minor',
            notation: 'x36x14x12x36.14x34.56,12',
            over:     'Cambridge',
            under:    'Beverley',
            le:       '12',
            hl:       '56'
        },
        Bourne: {
            id:       'bourne',
            name:     'Bourne Surprise Minor',
            notation: 'x36x14x12x36x34x36,12',
            over:     'Cambridge',
            under:    'Norwich',
            le:       '12',
            hl:       '36'
        },
        York: {
            id:       'york',
            name:     'York Surprise Minor',
            notation: 'x36x14x12x36.14x14.36,12',
            over:     'Cambridge',
            under:    'London',
            le:       '12',
            hl:       '36'
        },
        Durham: {
            id:       'durham',
            name:     'Durham Surprise Minor',
            notation: 'x36x14x12x36.14x34.16,12',
            over:     'Cambridge',
            under:    'Wells',
            le:       '12',
            hl:       '16'
        },
        Norfolk: {
            id:       'norfolk',
            name:     'Norfolk Surprise Minor',
            notation: 'x36x14x12x36x14x16,16',
            over:     'Cambridge',
            under:    'Cambridge',
            le:       '16',
            hl:       '16'
        },
        Primrose: {
            id:       'primrose',
            name:     'Primrose Surprise Minor',
            notation: 'x36x14x12x36x14x56,16',
            over:     'Cambridge',
            under:    'Cambridge',
            le:       '16',
            hl:       '56'
        },
        Hexham: {
            id:       'hexham',
            name:     'Hexham Surprise Minor',
            notation: 'x36x14x12x36.14x12.56,16',
            over:     'Cambridge',
            under:    'Surfleet',
            le:       '16',
            hl:       '56'
        },
        Berwick: {
            id:       'berwick',
            name:     'Berwick Surprise Minor',
            notation: 'x36x14x12x36.14x34.56,16',
            over:     'Cambridge',
            under:    'Beverley',
            le:       '16',
            hl:       '56'
        },
        Hull: {
            id:       'hull',
            name:     'Hull Surprise Minor',
            notation: 'x36x14x12x36x34x36,16',
            over:     'Cambridge',
            under:    'Norwich',
            le:       '16',
            hl:       '36'
        },
        Netherseale: {
            id:       'netherseale',
            name:     'Netherseale Surprise Minor',
            notation: 'x34x14x12x36x14x36,12',
            over:     'Norwich',
            under:    'Cambridge',
            le:       '12',
            hl:       '36'
        },
        Westminster: {
            id:       'westminster',
            name:     'Westminster Surprise Minor',
            notation: 'x34x14x12x36x12x36,12',
            over:     'Norwich',
            under:    'Westminster',
            le:       '12',
            hl:       '36'
        },
        Allendale: {
            id:       'allendale',
            name:     'Allendale Surprise Minor',
            notation: 'x34x14x12x36.12x12.36,12',
            over:     'Norwich',
            under:    'Allendale',
            le:       '12',
            hl:       '36'
        },
        Bamborough: {
            id:       'bamborough',
            name:     'Bamborough Surprise Minor',
            notation: 'x34x14x12x36.12x14.56,12',
            over:     'Norwich',
            under:    'Kelso',
            le:       '12',
            hl:       '56'
        },
        Lightfoot: {
            id:       'lightfoot',
            name:     'Lightfoot Surprise Minor',
            notation: 'x34x14x12x36.14x14.36,12',
            over:     'Norwich',
            under:    'London',
            le:       '12',
            hl:       '36'
        },
        Wearmouth: {
            id:       'wearmouth',
            name:     'Wearmouth Surprise Minor',
            notation: 'x34x14x12x36.14x34.16,12',
            over:     'Norwich',
            under:    'Wells',
            le:       '12',
            hl:       '16'
        },
        "Annable's London": {
            id:       'annableslondon',
            name:     "Annable's London Surprise Minor",
            notation: 'x34x14x12x36x14x36,16',
            over:     'Norwich',
            under:    'Cambridge',
            le:       '16',
            hl:       '36'
        },
        Warkworth: {
            id:       'warkworth',
            name:     'Warkworth Surprise Minor',
            notation: 'x34x14x12x36.14x12.36,16',
            over:     'Norwich',
            under:    'Surfleet',
            le:       '16',
            hl:       '36'
        },
        Norwich: {
            id:       'norwich',
            name:     'Norwich Surprise Minor',
            notation: 'x34x14x12x36x34x16,16',
            over:     'Norwich',
            under:    'Norwich',
            le:       '16',
            hl:       '16'
        },
        Bacup: {
            id:       'bacup',
            name:     'Bacup Surprise Minor',
            notation: 'x34x14x12x36.12x14.56,16',
            over:     'Norwich',
            under:    'Kelso',
            le:       '16',
            hl:       '56'
        },
        Rossendale: {
            id:       'rossendale',
            name:     'Rossendale Surprise Minor',
            notation: 'x34x14x12x36.14x14.36,16',
            over:     'Norwich',
            under:    'London',
            le:       '16',
            hl:       '36'
        },
        Stamford: {
            id:       'stamford',
            name:     'Stamford Surprise Minor',
            notation: 'x34x14x12x36.14x34.16,16',
            over:     'Norwich',
            under:    'Wells',
            le:       '16',
            hl:       '16'
        },
        Cunecastre: {
            id:       'cunecastre',
            name:     'Cunecastre Surprise Minor',
            notation: '36x36.14x12x36x14x36,12',
            over:     'London',
            under:    'Cunecastre',
            le:       '12',
            hl:       '36'
        },
        Lincoln: {
            id:       'lincoln',
            name:     'Lincoln Surprise Minor',
            notation: '36x36.14x12x36x12x36,12',
            over:     'London',
            under:    'Westminster',
            le:       '12',
            hl:       '36'
        },
        Coldstream: {
            id:       'coldstream',
            name:     'Coldstream Surprise Minor',
            notation: '36x36.14x12x36.12x12.36,12',
            over:     'London',
            under:    'Allendale',
            le:       '12',
            hl:       '36'
        },
        Kelso: {
            id:       'kelso',
            name:     'Kelso Surprise Minor',
            notation: '36x36.14x12x36.12x14.56,12',
            over:     'London',
            under:    'Kelso',
            le:       '12',
            hl:       '56'
        },
        London: {
            id:       'london',
            name:     'London Surprise Minor',
            notation: '36x36.14x12x36.14x14.36,12',
            over:     'London',
            under:    'London',
            le:       '12',
            hl:       '36'
        },
        Wells: {
            id:       'wells',
            name:     'Wells Surprise Minor',
            notation: '36x36.14x12x36.14x34.16,12',
            over:     'London',
            under:    'Wells',
            le:       '12',
            hl:       '16'
        },
        Northumberland: {
            id:       'northumberland',
            name:     'Northumberland Surprise Minor',
            notation: '34x36.14x12x36x14x16,12',
            over:     'Carlisle',
            under:    'Cambridge',
            le:       '12',
            hl:       '16'
        },
        Carlisle: {
            id:       'carlisle',
            name:     'Carlisle Surprise Minor',
            notation: '34x36.14x12x36x14x56,12',
            over:     'Carlisle',
            under:    'Cambridge',
            le:       '12',
            hl:       '56'
        },
        Munden: {
            id:       'munden',
            name:     'Munden Surprise Minor',
            notation: '34x36.14x12x36.14x12.56,12',
            over:     'Carlisle',
            under:    'Surfleet',
            le:       '12',
            hl:       '56'
        },
        Chester: {
            id:       'chester',
            name:     'Chester Surprise Minor',
            notation: '34x36.14x12x36.14x34.56,12',
            over:     'Carlisle',
            under:    'Beverley',
            le:       '12',
            hl:       '56'
        },
        Sandiacre: {
            id:       'sandiacre',
            name:     'Sandiacre Surprise Minor',
            notation: '34x36.14x12x36x34x36,12',
            over:     'Carlisle',
            under:    'Norwich',
            le:       '12',
            hl:       '36'
        },
        Alnwick: {
            id:       'alnwick',
            name:     'Alnwick Surprise Minor',
            notation: '34x36.14x12x36.14x14.36,12',
            over:     'Carlisle',
            under:    'London',
            le:       '12',
            hl:       '36'
        },
        Newcastle: {
            id:       'newcastle',
            name:     'Newcastle Surprise Minor',
            notation: '34x36.14x12x36.14x34.16,12',
            over:     'Carlisle',
            under:    'Wells',
            le:       '12',
            hl:       '16'
        },
        Whitley: {
            id:       'whitley',
            name:     'Whitley Surprise Minor',
            notation: '34x36.14x12x36x14x16,16',
            over:     'Carlisle',
            under:    'Cambridge',
            le:       '16',
            hl:       '16'
        },
        Wooler: {
            id:       'wooler',
            name:     'Wooler Surprise Minor',
            notation: '34x36.14x12x36x34x36,16',
            over:     'Carlisle',
            under:    'Norwich',
            le:       '16',
            hl:       '36'
        },
        Canterbury: {
            id:       'canterbury',
            name:     'Canterbury Surprise Minor',
            notation: '34x36.14x12x36.14x14.36,16',
            over:     'Carlisle',
            under:    'London',
            le:       '16',
            hl:       '36'
        },
        Morpeth: {
            id:       'morpeth',
            name:     'Morpeth Surprise Minor',
            notation: '34x36.14x12x36.14x34.16,16',
            over:     'Carlisle',
            under:    'Wells',
            le:       '16',
            hl:       '16'
        },
    };
    var optionsBuilder, courseOptions, leadOptions;
    for( var m in data ) {
        if( data.hasOwnProperty( m ) ) {
            optionsBuilder = new GridOptionsBuilder( {
                id: m.replace(/\W/g, '').toLowerCase(),
                stage: 6,
                notation: data[m].notation,
                ruleOffs: { from: 0, every: 12 },
                workingBell: (data[m].le === '12')? 'lightest' : 'heaviest'
            } );
            courseOptions = optionsBuilder.gridOptions.plainCourse.numbers();
            leadOptions   = optionsBuilder.gridOptions.plainCourse.grid();
            delete leadOptions.sideNotation;
            data[m].grid_course = new Grid( courseOptions );
            data[m].grid_lead   = new Grid( leadOptions );
            data[m].short_name  = m;
        }
    }

    return data;
} );
