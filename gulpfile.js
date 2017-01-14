var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
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

    var processor = [];

    return gulp.src('./dev/*.css')
      .pipe(postcss(processor))
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.stream())
});

// Task for watch changes
gulp.task('watch', function() {
    // content
    gulp.watch('./dev/*.css', ['css']);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
});

gulp.task('default',['watch', 'server']);