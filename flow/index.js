/*@flow*/

class Bar {
  x: string;
  y: string | number;
  z: Boolean;

  constructor(x: string, y: string | number) {
    this.x = x;
    this.y = y;
    this.z = false;
  }
}

var bar: Bar = new Bar('hello', 4);

var obj: { a: string, b: number, c: Array<string>, d: Bar } = {
  a: 'hello',
  b: 11,
  c: ['hello', 'world'],
  d: new Bar('hello', 3)
};

var foo: ?string = null;
