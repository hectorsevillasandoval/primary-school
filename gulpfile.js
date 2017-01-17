var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
  rucksack = require('rucksack-css'),
  cssnext = require('postcss-cssnext'),
  cssnested = require('postcss-nested'),
  mixins = require('postcss-mixins'),
  atImport = require('postcss-import'),
  lost = require('lost'),
  mqpacker = require('css-mqpacker'),
  csswring = require('csswring'),
	browserSync = require('browser-sync').create();


// Development Server 
gulp.task('server', function(){
	browserSync.init({
			server: {
				baseDir: './dist'
			}
		});
	});

// Task for css
gulp.task('css', function() {
    // content

    var processor = [
      atImport(),
      mixins(),
      cssnested,
      lost(),
      rucksack(),
      cssnext({ browsers: ['> 5%','ie 8'] }),
      mqpacker({ sort: true})/*,
      csswring()*/
    ];

    return gulp.src('./dev/css/main.css')
      .pipe(postcss(processor))
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.stream())
});

// Task for watch changes
gulp.task('watch', function() {
    // content
    gulp.watch('./dev/css/*.css', ['css']);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
});

gulp.task('default',['watch', 'server']);