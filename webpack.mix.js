// webpack.mix.js

let mix = require('laravel-mix')

mix.js('src/app.js', 'dist').setPublicPath('dist')
mix.sass('src/style.scss', 'dist').setPublicPath('dist')

mix.webpackConfig({
  resolve: {
    modules: ['node_modules'],
    alias: {
      jquery: 'jquery/src/jquery'
    }
  }
})
