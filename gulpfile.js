var DEST = './dist/';
var gulp = require( 'gulp' );
var plumber         = require( 'gulp-plumber' );
var rename          = require( 'gulp-rename' );
var es              = require( 'event-stream' );
var svg2png         = require( 'gulp-svg2png' );
var less            = require( 'gulp-less' );
var autoprefixer    = require( 'gulp-autoprefixer' );
var cleanCSS        = require( 'gulp-clean-css' );
var imagemin        = require( 'gulp-imagemin' );
var requirejs       = require( 'gulp-requirejs' );
var amdclean        = require( 'gulp-amdclean' );
var uglify          = require( 'gulp-uglify' );
var uglifyInline    = require( 'gulp-uglify-inline' );
var typogr          = require( 'gulp-typogr' );
var hypher          = require( 'gulp-hypher' );
var h_pattern       = require( 'hyphenation.en-gb' );
var htmlmin         = require( 'gulp-htmlmin' );
var sourcemaps      = require( 'gulp-sourcemaps' );


gulp.task( 'default', ['appicon', 'androidicon', 'img', 'favicon', 'fonts', 'css', 'js', 'html'], function() {} );


gulp.task( 'appicon', function() {
	var tasks = [70, 144, 150, 152, 180, 310].map( function( size ) {
		return gulp.src( 'src/img/appicon.svg' )
			.pipe( svg2png( size/63 ) )
			.pipe( imagemin() )
			.pipe( rename( function( path ) {
				path.basename += '-'+size;
			} ) )
			.pipe( gulp.dest( DEST+'img/' ) );
	} );
	return es.merge.apply( null, tasks );
} );


gulp.task( 'androidicon', function() {
	var tasks = [192, 512].map( function( size ) {
		return gulp.src( 'src/img/androidicon.svg' )
			.pipe( svg2png( size/192 ) )
			.pipe( imagemin() )
			.pipe( rename( function( path ) {
				path.basename += '-'+size;
			} ) )
			.pipe( gulp.dest( DEST+'img/' ) );
	} );
	return es.merge.apply( null, tasks );
} );


gulp.task( 'favicon', function() {
	gulp.src( 'src/img/favicon.ico' )
		.pipe( gulp.dest( DEST ) );
} );


gulp.task( 'fonts', function() {
	gulp.src( 'src/fonts/*' )
		.pipe( gulp.dest( DEST+'fonts/' ) );
} );


gulp.task( 'css', function() {
	gulp.src( 'src/css/_.less' )
		.pipe( plumber( { errorHandler: function ( err ) {
			console.log(err);
			this.emit('end');
			}
		} ) )
		.pipe( less() )
		.pipe( autoprefixer( { browsers: ['last 2 versions'] } ) )
		.pipe( rename( 'standard41.css' ) )
		.pipe( cleanCSS( { keepSpecialComments: 0 } ) )
		.pipe( gulp.dest( DEST+'css/' ) )
} );


gulp.task( 'img', function() {
	gulp.src( ['src/img/*.svg', 'src/img/*.png'] )
		.pipe( imagemin() )
		.pipe( gulp.dest( DEST+'img/' ) )
} );


gulp.task( 'js', function() {
	requirejs( {
		baseUrl: 'src/js',
		include: ['standard41'],
		mainConfigFile: 'src/js/standard41.js',
		paths: {
			jquery: 'lib/jquery',
			Modernizr: 'lib/modernizr'
		},
		shim: {
			Modernizr: {
				exports: 'Modernizr'
			}
		},
		optimize: 'none',
		out: 'standard41.js'
	} )
		.pipe( plumber( { errorHandler: function ( err ) {
			console.log(err);
			this.emit('end');
			}
		} ) )
		.pipe( amdclean.gulp() )
		.pipe( sourcemaps.init() )
		.pipe( uglify() )
		.pipe( sourcemaps.write( '.' ) )
		.pipe( gulp.dest( DEST+'js/' ) )
} );


gulp.task( 'html', function() {
	gulp.src( ['src/index.html'] )
		.pipe( plumber( { errorHandler: function ( err ) {
			console.log(err);
			this.emit('end');
			}
		} ) )
		.pipe( hypher( h_pattern ) )
		.pipe( typogr( { only: ['amp', 'widont', 'caps', 'smartypants'] } ) )
		.pipe( uglifyInline() )
		.pipe( htmlmin( { removeComments: true, collapseWhitespace: true } ) )
		.pipe( gulp.dest( DEST ) )
} );


gulp.task( 'watch', function() {
	gulp.watch( ['src/img/appicon.svg'], ['appicon'] );
	gulp.watch( ['src/img/favicon.*'], ['favicon'] );
	gulp.watch( ['src/css/**/*.less', 'src/css/**/*.css'], ['css'] );
	gulp.watch( ['src/js/**/*.js'], ['js'] );
	gulp.watch( ['src/**/*.html'], ['html'] );
} );
