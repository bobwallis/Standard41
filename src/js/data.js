define( ['lib/GridOptionsBuilder', 'lib/Grid'], function( GridOptionsBuilder, Grid ) {
    var data = {
        Ipswich: {
            name:     'Ipswich Surprise Minor',
            notation: 'x36x14x12x36x14x16,12',
            over:     'Cambridge',
            under:    'Cambridge',
            le:       '12',
            hl:       '16'
        },
        Cambridge: {
            name:     'Cambridge Surprise Minor',
            notation: 'x36x14x12x36x14x56,12',
            over:     'Cambridge',
            under:    'Cambridge',
            le:       '12',
            hl:       '56'
        },
        Surfleet: {
            name:     'Surfleet Surprise Minor',
            notation: 'x36x14x12x36.14x12.56,12',
            over:     'Cambridge',
            under:    'Surfleet',
            le:       '12',
            hl:       '56'
        },
        Beverley: {
            name:     'Beverley Surprise Minor',
            notation: 'x36x14x12x36.14x34.56,12',
            over:     'Cambridge',
            under:    'Beverley',
            le:       '12',
            hl:       '56'
        },
        Bourne: {
            name:     'Bourne Surprise Minor',
            notation: 'x36x14x12x36x34x36,12',
            over:     'Cambridge',
            under:    'Norwich',
            le:       '12',
            hl:       '36'
        },
        York: {
            name:     'York Surprise Minor',
            notation: 'x36x14x12x36.14x14.36,12',
            over:     'Cambridge',
            under:    'London',
            le:       '12',
            hl:       '36'
        },
        Durham: {
            name:     'Durham Surprise Minor',
            notation: 'x36x14x12x36.14x34.16,12',
            over:     'Cambridge',
            under:    'Wells',
            le:       '12',
            hl:       '16'
        },
        Norfolk: {
            name:     'Norfolk Surprise Minor',
            notation: 'x36x14x12x36x14x16,16',
            over:     'Cambridge',
            under:    'Cambridge',
            le:       '16',
            hl:       '16'
        },
        Primrose: {
            name:     'Primrose Surprise Minor',
            notation: 'x36x14x12x36x14x56,16',
            over:     'Cambridge',
            under:    'Cambridge',
            le:       '16',
            hl:       '56'
        },
        Hexham: {
            name:     'Hexham Surprise Minor',
            notation: 'x36x14x12x36.14x12.56,16',
            over:     'Cambridge',
            under:    'Surfleet',
            le:       '16',
            hl:       '56'
        },
        Berwick: {
            name:     'Berwick Surprise Minor',
            notation: 'x36x14x12x36.14x34.56,16',
            over:     'Cambridge',
            under:    'Beverley',
            le:       '16',
            hl:       '56'
        },
        Hull: {
            name:     'Hull Surprise Minor',
            notation: 'x36x14x12x36x34x36,16',
            over:     'Cambridge',
            under:    'Norwich',
            le:       '16',
            hl:       '36'
        },
        Netherseale: {
            name:     'Netherseale Surprise Minor',
            notation: 'x34x14x12x36x14x36,12',
            over:     'Norwich',
            under:    'Cambridge',
            le:       '12',
            hl:       '36'
        },
        Westminster: {
            name:     'Westminster Surprise Minor',
            notation: 'x34x14x12x36x12x36,12',
            over:     'Norwich',
            under:    'Westminster',
            le:       '12',
            hl:       '36'
        },
        Allendale: {
            name:     'Allendale Surprise Minor',
            notation: 'x34x14x12x36.12x12.36,12',
            over:     'Norwich',
            under:    'Allendale',
            le:       '12',
            hl:       '36'
        },
        Bamborough: {
            name:     'Bamborough Surprise Minor',
            notation: 'x34x14x12x36.12x14.56,12',
            over:     'Norwich',
            under:    'Kelso',
            le:       '12',
            hl:       '56'
        },
        Lightfoot: {
            name:     'Lightfoot Surprise Minor',
            notation: 'x34x14x12x36.14x14.36,12',
            over:     'Norwich',
            under:    'London',
            le:       '12',
            hl:       '36'
        },
        Wearmouth: {
            name:     'Wearmouth Surprise Minor',
            notation: 'x34x14x12x36.14x34.16,12',
            over:     'Norwich',
            under:    'Wells',
            le:       '12',
            hl:       '16'
        },
        "Annable\'s London": {
            name:     "Annable\'s London Surprise Minor",
            notation: 'x34x14x12x36x14x36,16',
            over:     'Norwich',
            under:    'Cambridge',
            le:       '16',
            hl:       '36'
        },
        Warkworth: {
            name:     'Warkworth Surprise Minor',
            notation: 'x34x14x12x36.14x12.36,16',
            over:     'Norwich',
            under:    'Surfleet',
            le:       '36',
            hl:       '16'
        },
        Norwich: {
            name:     'Norwich Surprise Minor',
            notation: 'x34x14x12x36x34x16,16',
            over:     'Norwich',
            under:    'Norwich',
            le:       '16',
            hl:       '16'
        },
        Bacup: {
            name:     'Bacup Surprise Minor',
            notation: 'x34x14x12x36.12x14.56,16',
            over:     'Norwich',
            under:    'Kelso',
            le:       '16',
            hl:       '56'
        },
        Rossendale: {
            name:     'Rossendale Surprise Minor',
            notation: 'x34x14x12x36.14x14.36,16',
            over:     'Norwich',
            under:    'London',
            le:       '16',
            hl:       '36'
        },
        Stamford: {
            name:     'Stamford Surprise Minor',
            notation: 'x34x14x12x36.14x34.16,16',
            over:     'Norwich',
            under:    'Wells',
            le:       '16',
            hl:       '16'
        },
        Cunecastre: {
            name:     'Cunecastre Surprise Minor',
            notation: '36x36.14x12x36x14x36,12',
            over:     'London',
            under:    'Cunecastre',
            le:       '12',
            hl:       '16'
        },
        Lincoln: {
            name:     'Lincoln Surprise Minor',
            notation: '36x36.14x12x36x12x36,12',
            over:     'London',
            under:    'Westminster',
            le:       '12',
            hl:       '36'
        },
        Coldstream: {
            name:     'Coldstream Surprise Minor',
            notation: '36x36.14x12x36.12x12.36,12',
            over:     'London',
            under:    'Allendale',
            le:       '12',
            hl:       '36'
        },
        Kelso: {
            name:     'Kelso Surprise Minor',
            notation: '36x36.14x12x36.12x14.56,12',
            over:     'London',
            under:    'Kelso',
            le:       '12',
            hl:       '56'
        },
        London: {
            name:     'London Surprise Minor',
            notation: '36x36.14x12x36.14x14.36,12',
            over:     'London',
            under:    'London',
            le:       '12',
            hl:       '36'
        },
        Wells: {
            name:     'Wells Surprise Minor',
            notation: '36x36.14x12x36.14x34.16,12',
            over:     'London',
            under:    'Wells',
            le:       '12',
            hl:       '16'
        },
        Northumberland: {
            name:     'Northumberland Surprise Minor',
            notation: '34x36.14x12x36x14x16,12',
            over:     'Carlisle',
            under:    'Cambridge',
            le:       '12',
            hl:       '16'
        },
        Carlisle: {
            name:     'Carlisle Surprise Minor',
            notation: '34x36.14x12x36x14x56,12',
            over:     'Carlisle',
            under:    'Cambridge',
            le:       '12',
            hl:       '56'
        },
        Munden: {
            name:     'Munden Surprise Minor',
            notation: '34x36.14x12x36.14x12.56,12',
            over:     'Carlisle',
            under:    'Surfleet',
            le:       '12',
            hl:       '56'
        },
        Chester: {
            name:     'Chester Surprise Minor',
            notation: '34x36.14x12x36.14x34.56,12',
            over:     'Carlisle',
            under:    'Beverley',
            le:       '12',
            hl:       '36'
        },
        Sandiacre: {
            name:     'Sandiacre Surprise Minor',
            notation: '34x36.14x12x36x34x36,12',
            over:     'Carlisle',
            under:    'Norwich',
            le:       '12',
            hl:       '36'
        },
        Alnwick: {
            name:     'Alnwick Surprise Minor',
            notation: '34x36.14x12x36.14x14.36,12',
            over:     'Carlisle',
            under:    'London',
            le:       '12',
            hl:       '36'
        },
        Newcastle: {
            name:     'Newcastle Surprise Minor',
            notation: '34x36.14x12x36.14x34.16,12',
            over:     'Carlisle',
            under:    'Wells',
            le:       '12',
            hl:       '16'
        },
        Whitley: {
            name:     'Whitley Surprise Minor',
            notation: '34x36.14x12x36x14x16,16',
            over:     'Carlisle',
            under:    'Cambridge',
            le:       '16',
            hl:       '16'
        },
        Wooler: {
            name:     'Wooler Surprise Minor',
            notation: '34x36.14x12x36x34x36,16',
            over:     'Carlisle',
            under:    'Norwich',
            le:       '16',
            hl:       '36'
        },
        Canterbury: {
            name:     'Canterbury Surprise Minor',
            notation: '34x36.14x12x36.14x14.36,16',
            over:     'Carlisle',
            under:    'London',
            le:       '16',
            hl:       '36'
        },
        Morpeth: {
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
        }
    }

    return data;
} );