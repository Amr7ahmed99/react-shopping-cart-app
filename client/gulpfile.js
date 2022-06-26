//Top Level Functions (task, src, dest, watch)

import { task, watch, src, dest } from 'gulp';
import gulpSass from 'gulp-sass';
const sass= gulpSass(require('sass'));

// gulp.task('log', async ()=>{
//     console.log("Logggg");
// });

// gulp.task('sass', async()=>{
//     gulp.src('src/*.scss').pipe(sass()).pipe(gulp.dest('src'));
// });


task('sass', async()=>{
    watch('src/*.scss', async()=>{
        src('src/*.scss').pipe(sass()).pipe(dest('src'));
    });

});