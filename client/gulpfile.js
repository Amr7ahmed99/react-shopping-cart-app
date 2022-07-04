//Top Level Functions (task, src, dest, watch)

// import { task, watch, src, dest } from 'gulp';
// import gulpSass from 'gulp-sass';
// const sass= gulpSass(require('sass'));

const gulp = require('gulp');
const gulpSass= require('gulp-sass');
const sass= gulpSass(require('sass'));



gulp.task('sass', async ()=>{
    gulp.watch('src/components/Local/**/*.scss', async()=>{
        gulp.src('src/components/Local/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'));
    });
});
// gulp.task('log', async ()=>{
//     console.log("Logggg");
// });

// gulp.task('sass', async()=>{
//     gulp.src('src/*.scss').pipe(sass()).pipe(gulp.dest('src'));
// });


// task('sass', async()=>{
//     watch('src/*.scss', async()=>{
//         src('src/*.scss').pipe(sass()).pipe(dest('src'));
//     });
// });