function resolvePromise(promise2, x, resolve, reject) {
  // 判断x是否为promise 鸭子模型
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    const then = x.then;
    if (typeof then === 'function') {
      then.call(  //避免this改变
        x,
        function (y) { //onFulfiled
          resolve(y)
        },
        function (r) { //onRejected
          reject(r)
        }
      )
    } else {
      resolve(x)
    }
  } else {
    resolve(x)
  }
}
function MyPromise(executor) {
  let that = this;
  that.status = 'pending';
  that.value = undefined;
  that.reason = undefined;
  // 发布订阅
  that.onResolvedCallbacks = [];
  that.onRejectedCallbacks = [];
  function resolve(value) {
    if (that.status === 'pending') {
      that.status = 'fulfilled';
      that.value = value;
    }
    that.onResolvedCallbacks.forEach(fn => fn())
  }
  function reject(reason) {
    if (that.status === 'pending') {
      that.status = 'rejected';
      that.reason = reason;
    }
    that.onRejectedCallbacks.forEach(fn => fn())
  }
  executor(resolve, reject)
}

MyPromise.prototype.then = function (onFulfiled, onRejected) {
  let that = this;
  const promise2 = new MyPromise(function () {
    if (that.status === "fulfilled") {
      try {
        const x = onFulfiled(that.value)
        resolvePromise(promise2, x, resolve, reject)
      }
      catch (e) {
        reject(e)
      }
    }
    if (that.status === "rejected") {
      try {
        const x = onRejected(that.reason)
        resolvePromise(promise2, x, resolve, reject)
      }
      catch (e) {
        reject(e)
      }
    }
    if (that.status === "pending") {
      that.onResolvedCallbacks.push(function () {
        try {
          const x = onFulfiled(that.value)
          resolvePromise(promise2, x, resolve, reject)
        }
        catch (e) {
          reject(e)
        }
      })
      that.onRejectedCallbacks.push(function () {
        try {
          const x = onRejected(that.reason)
          resolvePromise(promise2, x, resolve, reject)
        }
        catch (e) {
          reject(e)
        }
      })
    }
  })
  return promise2
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(_ => resolve(23), 100)
})
p.then((v) => { console.log('value:', v) })
p.then((v) => { console.log('value2:', v * 2) })

Promise.all = function (promises) {

  return new Promise(function (resolve, reject) {
    const len = promises.length
    const arr = new Array(len)
    let i = 0
    function processData(index, value) {
      i++
      arr[index] = value;
      if (i === len) {
        resolve(arr);
      }
    }
    for (let i = 0; i < len; i++) {
      let current = promises[i]
      if (typeof current === 'object' && current.then) {
        current.then(function (data) {
          processData(i, data)
        }, reject)
      } else {

      }
    }
  })
}

function promisify(fn) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      args.push(function (err, data) {
        if (err) reject(err)
        resolve(data)
      })
      fn.apply(null, args)
    })
  }
}
