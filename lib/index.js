'use strict';

var postcss = require('postcss');
var Px2upx = require('px2upx');

module.exports = postcss.plugin('postcss-px2upx', function (options) {
  return function (css, result) {
    var oldCssText = css.toString();
    var px2upxIns = new Px2upx(options);
    var newCssText = px2upxIns.generateUpx(oldCssText);
    var newCssObj = postcss.parse(newCssText);
    result.root = newCssObj;
  };
});
