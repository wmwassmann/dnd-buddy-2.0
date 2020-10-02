1 // Development tasks
2 // --------------------------------------------------------------------------

before_script:
  - npm install -g gulp-cli
script: gulp

gulp.task('travis', ['build', 'dnd-buddy-2.0'], function() {
  process.exit(0);
});


 
