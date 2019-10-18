/**
 * 函数柯里化的主要作用和特点就是参数复用、提前返回和延迟执行
 * 例如封装兼容现代浏览器和IE浏览器的事件监听的方法
 */
var addEvent = (function () {
  if (window.addEventListener) {
    return function (el, type, fn, capture) {
      el.addEventListener(type, function (e) {
        fn.call(el, e)
      }, capture)
    }
  } else {
    return function (ele, type, fn) {
      el.attachEvent('on' + type, function (e) {
        fn.call(el, e)
      })s
    }
  }
})()

Function.prototype.bind = function () {
  var fn = this;
  var args = Array.prototype.slice.call(arguments);
  var context = args.shift();

  return function () {
    return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)))
  }
}

