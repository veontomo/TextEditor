/*jslint plusplus: true, white: true */
/*global gulp */

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');

// / some settings
var productionDir = './www/js/';
var productionFileName = 'min.js';

// define project files in the order as they must be included
// each of these files is to be first compressed and then
// all of these files are concatenated in a single file.
var sourceFiles = [
                   'src/js/typescript/Properties/IProperties.ts',
                   'src/js/typescript/Properties/Properties.ts',
                   'src/js/typescript/Tags/Node.ts',
                   'src/js/typescript/Tags/Element.ts',
                   'src/typescript/Levenshtein.ts',
                   
// configuration file
'src/scripts/js/config/AppConfig.js', 'src/scripts/js/config/CKEditorConfig.js',
'src/scripts/js/editorOnLoad.js', ];

console.log(sourceFiles);

gulp.task('compress', function() {
	return gulp.src(sourceFiles).pipe(uglify())
			.pipe(concat(productionFileName)).pipe(gulp.dest(productionDir));
});

gulp.task('watch', function() {
	gulp.watch(sourceFiles, [ 'compress' ]);
});

gulp.task('ts-compile', function() {
	var tsResult = gulp.src('src/scripts/typescript/**/*.ts').pipe(ts({
		noImplicitAny : true,
		out : 'output.js'
	}));
	return tsResult.js.pipe(gulp.dest(productionDir));
});

gulp.task('default', [ 'compress', 'watch', 'ts-compile' ]);
