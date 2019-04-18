# postcss-px2upx

This is a [postcss](https://www.npmjs.com/package/postcss) plugin of [px2upx](https://www.npmjs.com/package/px2upx).

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/postcss-px2upx.svg?style=flat-square
[npm-url]: https://npmjs.org/package/postcss-px2upx
[travis-image]: https://img.shields.io/travis/songsiqi/px2upx-postcss.svg?style=flat-square
[travis-url]: https://travis-ci.org/songsiqi/px2upx-postcss
[downloads-image]: http://img.shields.io/npm/dm/postcss-px2upx.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/postcss-px2upx

## Usage

### Node

```
var postcss = require('postcss');
var px2upx = require('postcss-px2upx');
var originCssText = '...';
var newCssText = postcss().use(px2upx({upxUnit: 64})).process(originCssText).css;
```

**Please see [px2upx](https://www.npmjs.com/package/px2upx) for more information about the features and usage of px2upx.**

### Gulp

```
npm install gulp-postcss
```

```
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var px2upx = require('postcss-px2upx');

gulp.task('default', function() {
  var processors = [px2upx({upxUnit: 75})];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});
```

### Webpack

```
npm install postcss-loader
```

```
var px2upx = require('postcss-px2upx');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function() {
    return [px2upx({upxUnit: 75})];
  }
}
```

### Grunt

```
npm install grunt-postcss
```

```
module.exports = function(grunt) {
  grunt.initConfig({
    postcss: {
      options: {
        processors: [
          px2upx({upxUnit: 75})
        ]
      },
      dist: {
        src: 'src/*.css',
        dest: 'build'
      }
    }
  });
  grunt.loadNpmTasks('grunt-postcss');
  grunt.registerTask('default', ['postcss']);
}
```

## Change Log

### 0.3.0

* Deps: px2upx@~0.5.0
  * Support Animation keyframes (no `/*px*/` comment).

### 0.2.0

* Deps: postcss@^5.0.0

### 0.1.6

* Deps: px2upx@~0.4.0
  * The generated [data-dpr] rules follow the origin rule, no longer placed at the end of the whole style sheet.
  * Optimize 0px, do not generate 3 [data-dpr] rules.

### 0.1.5

* Do not extend current root node.

### 0.1.4

* Fix bug while working with webpack loader.

### 0.1.0

* First release.

## License

MIT
