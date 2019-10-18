var obj = { a: 1 };
var b = obj;
var c = Object.create(obj);

c.a // 1
c.a = 2
c.__proto__.a // 1

// Object.create()返回了一个新的空对象，并且这个空对象的构造函数的原型是指向 obj 的。具体内部模拟实现：
_create = function(o) {
  let F = function() {};
  F.prototype = o;
  return new F();
}

// 用 Object.create 实现类式继承——单继承
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
}

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor
}

// 子类继承父类
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle)
console.log('Is rect an instance of Shape?', rect instanceof Shape)
rect.move(1, 1);

// 关于 new 的内部模拟实现