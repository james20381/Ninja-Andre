let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js');
mix.js('resources/assets/js/creative.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .sass('resources/assets/sass/welcome/sb-creative-landing/welcome.scss', 'public/css')
   .sass('resources/assets/sass/shop/shop.scss', 'public/css');
   // mix.webpackConfig({ devtool: "inline-source-map" });
   // .sourceMaps();
   mix.options({
     sourcemaps: 'inline-source-map'
   });
