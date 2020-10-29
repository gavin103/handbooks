Function.prototype.fakeBind = function (context) {
  const fToBind = this;
  const bindArgs = [...arguments].slice(1)
  function fNOP() { }
  function fBound() {
    const args = [...arguments]
    // fNOP.prototype.isPrototypeOf(this) 判断是否为new调用
    return fToBind.apply(fNOP.prototype.isPrototypeOf(this) ? this : context, [...bindArgs, ...args])
  }
  if (this.prototype) {
    // Function.prototype doesn't have a prototype property
    fNOP.prototype = this.prototype;
  }
  fBound.prototype = new Fn()
  return fBound
}

// function add() {
//   console.log(this.a)
//   return [...arguments].reduce((a, b) => a + b, 0)
// }

// const obj = { a: 3 }
// global.a = 1

// const bindAdd = add.fakeBind(obj, 1, 2)
// const res = bindAdd(3, 4)
// console.log(res)

// function Fn() {
//   this.a = 23
//   console.log(this)
// }
// Fn.prototype.say = function () {
//   console.log('a:', this.a)
// }
// const obj = { a: 3 }
// global.a = 5

// const f = new Fn()
// f.say()

// const bindFn = Fn.fakeBind(obj)
// const g = new bindFn()
// g.say()