(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.setCustomProperties = factory());
}(this, (function () { 'use strict';

var UPPERCASE = /([A-Z])/g;

function camelToKebab(string) {
  return string.replace(UPPERCASE, function (match) {
    return "-" + match[0].toLowerCase();
  });
}

function setCustomProperties(properties) {
  var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;

  Object.keys(properties).forEach(function (prop) {
    node.style.setProperty('--' + camelToKebab(prop), properties[prop]);
  });
}

return setCustomProperties;

})));
