---
title: 手写 call apply bind
date: 2020-10-29
---

[[TOC]]


|        | call/apply/bind 的异同点                                                                                                                                                                                       |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 共同点 | 修改this指向                                                                                                                                                                                                   |
| 不同点 | - call()和apply()是立刻执行的， 而bind()是返回了一个函数 <br />- call则可以传递多个参数，第一个参数和apply一样，是用来替换的对象，后边是参数列表。<br/>- apply最多只能有两个参数——新this对象和一个数组argArray |

## 手写call
```js
Function.prototype.fakeCall = function (context) {
  const ctx = context? Object(context) : window;
  ctx.func = this;
  const args = [...arguments].slice(1)
  const res = args.length > 0 ? ctx.func(...args) : ctx.func();
  delete ctx.func //还原上下文，避免造成污染
  return res
}

// const obj = { a: 1 };
// global.a = 3;
// function fn() {
//   console.log(this.a)
// }

// fn();
// fn.call(obj)
// fn.fakeCall(obj)

```

## 手写Apply

```js
Function.prototype.fakeApply = function (context) {
  const ctx = context? Object(context) : window;
  ctx.func = this;
  // apply第二个参数，是参数数组
  const argsList = arguments[1]
  const res = argsList ? ctx.func(...argsList) : ctx.func();
  delete ctx.func //还原上下文，避免造成污染
  return res
}

// const obj = { a: 1 };
// global.a = 3;
// function fn(a, b) {
//   console.log(a + b)
//   console.log(this.a)
// }

// fn(3, 4);
// fn.apply(obj, [1, 2])
// fn.fakeApply(obj, [3, 5])
```

## 手写bind
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
```js
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
```