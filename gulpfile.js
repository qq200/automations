const gulp=require('gulp');
const uglify=require('gulp-uglify');
const postcss=require('gulp-postcss');
const autoprefixer=require('autoprefixer');
const csslint=require('gulp-csslint');
const concatCss=require('gulp-concat-css');
const cleanCss=require('gulp-clean-css');
const rename=require('gulp-rename');



// css post proces TASK


exports.css=(cb)=>{
    //concatinarea
    //uglify/minimizarea
    // post css/autoprefixarea
    let config_browsers={
        browsers:[
        '>1% in MD', //toate browserele cu 1% de utilizare in Md
        'last 10 versions', // ultimile 10 versiuni
        'Firefox ESR',
        'not ie <10', // a nu se aplica pentru IE9

        ]
    }
    return gulp
        .src('./src/css/*.css')  // citim din sursa
        .pipe(csslint()) //verifica css-ul
        .pipe(csslint.formatter())//coding stile verifica
        .pipe(postcss([autoprefixer(config_browsers)])) // autoprefixare postcss
        .pipe(concatCss('style.css'))
        .pipe(gulp.dest('./dist/css')) //le plasam in destinatie
        .pipe(cleanCss())
        // .pipe(uglify()) //minimizeaza compreseaza
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/css')); //le plasam in destinatie
        ;
}


// default  task

// exports.default=(cb)=>{
//     console.log("starting default");
//     cb();
// }




/////PE ACASA 
//1 task scss *.scss > .css
// 2 task scripts *.js ->concat/uglify >js
// ES6 > transpilate >ES5