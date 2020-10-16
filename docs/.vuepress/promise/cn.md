# Promise/A+ 规范

这是实施者为实施者提供的开源健全可互操作的JavaScript Promise 规范。
Promise代表着异步操作的最终结果。与promise进行交互的主要方式是通过then方法，
该方法通过注册回调以接收promise的最终值或promise未完成的原因。
该规范详细说明了then方法的行为，它可以依赖所有符合Promises / A +的promise实现来提供可互操作的基础库。 因此，可以认为规范非常稳定。 尽管Promises / A +组织可能偶尔会修
改此规范，并采用较小的向后兼容的更改来解决新发现的极端情况。但只有经过仔细考虑，讨论和测试后，
我们才会集成大型或向后不兼容的更改。
从历史上看，Promises / A +澄清了早期Promises / A提案的行为条款，
将其扩展到涵盖事实上的行为并省略了未指明或有问题的部分。
最后，核心Promises / A +规范没有涉及如何创建，实现或拒绝（create, fulfill, or reject ） promises，而是选择专注于提供可交互操作的then方法。
配套规范中的未来工作可能涉及这些主题。
1. 术语

1.1 "promise"是具有then方法的对象或函数，其行为符合此规范。
1.2 "thenable"是定义then方法的对象或函数。
1.3 "value"是任意合法的Javascript值，（包括undefined,thenable, promise）
1.4 "exception"是使用throw语句抛出的值
1.5 "reason"是表示promise为什么被rejected的值

2. 要求
2.1 Promise状态
一个promise必须处于三种状态之一： 请求态（pending）， 完成态（fulfilled），拒绝态（rejected）
2.1.1 当promise处于请求状态（pending）时

2.1.1.1 promise可以转为fulfilled或rejected状态

2.1.2 当promise处于完成状态（fulfilled）时

2.1.2.1 promise不能转为任何其他状态
2.1.2.2 必须有一个值，且此值不能改变

2.1.3 当promise处于拒绝状态（rejected）时

2.1.3.1 promise不能转为任何其他状态
2.1.3.2 必须有一个原因（reason），且此原因不能改变

2.2 then方法
promise必须提供then方法来存取它当前或最终的值或者原因。
promise的then方法接收两个参数：
promise.then(onFulfilled, onRejected)
复制代码
2.2.1 onFulfilled和onRejected都是可选的参数：

2.2.1.1 如果 onFulfilled不是函数，必须忽略
2.2.1.1 如果 onRejected不是函数，必须忽略

2.2.2 如果onFulfilled是函数:

2.2.2.1 此函数必须在promise 完成(fulfilled)后被调用,并把promise 的值作为它的第一个参数
2.2.2.2 此函数在promise完成(fulfilled)之前绝对不能被调用
2.2.2.2 此函数绝对不能被调用超过一次

2.2.3 如果onRejected是函数:

2.2.2.1 此函数必须在promise rejected后被调用,并把promise 的reason作为它的第一个参数
2.2.2.2 此函数在promise rejected之前绝对不能被调用
2.2.2.2 此函数绝对不能被调用超过一次

2.2.4 在执行上下文堆栈（execution context）仅包含平台代码之前，不得调用 onFulfilled和onRejected  3.1
2.2.5 onFulfilled和onRejected必须被当做函数调用(i.e. with no this value-->这里不会翻......). 3.2
2.2.6 then可以在同一个promise里被多次调用

2.2.6.1 如果/当 promise 完成执行（fulfilled）,各个相应的onFulfilled回调
必须根据最原始的then 顺序来调用
2.2.6.2 如果/当 promise 被拒绝（rejected）,各个相应的onRejected回调
必须根据最原始的then 顺序来调用

2.2.7 then必须返回一个promise 3.3
  promise2 = promise1.then(onFulfilled, onRejected);
复制代码
2.2.7.1 如果onFulfilled或onRejected返回一个值x, 运行
Promise Resolution Procedure  [[Resolve]](promise2, x) 2.3
2.2.7.2 如果onFulfilled或onRejected抛出一个异常e,promise2
必须被拒绝（rejected）并把e当作原因
2.2.7.3 如果onFulfilled不是一个方法，并且promise1已经完成（fulfilled）,
promise2必须使用与promise1相同的值来完成（fulfiled）
2.2.7.4  如果onRejected不是一个方法，并且promise1已经被拒绝（rejected）,
promise2必须使用与promise1相同的原因来拒绝（rejected）

 2.3 Promise解决程序
promise解析过程 是一个抽象操作，它将promise和value作为输入，我们将其表示为[[Resolve]]（promise，x）。
如果x是thenable的，假设x的行为至少有点像promise，
它会尝试让promise采用x的状态。不然就会用x来完成promise
只要它们公开一个Promises / A +兼容的方法，对thenables的这种处理允许promise实现进行互操作，
它还允许Promises / A +实现使用合理的then方法“同化”不一致的实现。
运行[[Resolve]](promise, x),执行以下步骤：
2.3.1 如果promise和x引用同一个对象，则用TypeError作为原因拒绝（reject）promise。
2.3.2 如果x是一个promise,采用promise的状态3.4

2.3.2.1 如果x是请求状态(pending),promise必须保持pending直到xfulfilled或rejected
2.3.2.2 如果x是完成态(fulfilled)，用相同的值完成fulfillpromise
2.3.2.2 如果x是拒绝态(rejected)，用相同的原因rejectpromise

2.3.3另外，如果x是个对象或者方法

2.3.3.1 让x作为x.then. 3.5
2.3.3.2 如果取回的x.then属性的结果为一个异常e,用e作为原因reject promise
2.3.3.3 如果then是一个方法，把x当作this来调用它，
第一个参数为 resolvePromise，第二个参数为rejectPromise,其中:

2.3.3.3.1  如果/当 resolvePromise被一个值y调用，运行 [[Resolve]](promise, y)
2.3.3.3.2  如果/当 rejectPromise被一个原因r调用，用r拒绝（reject）promise
2.3.3.3.3  如果resolvePromise和 rejectPromise都被调用，或者对同一个参数进行多次调用，第一次调用执行，任何进一步的调用都被忽略
2.3.3.3.4  如果调用then抛出一个异常e,

2.3.3.3.4.1 如果resolvePromise或 rejectPromise已被调用，忽略。
2.3.3.3.4.2 或者， 用e作为reason拒绝（reject）promise




2.3.3.4  如果then不是一个函数，用x完成(fulfill)promise

2.3.4 如果 x既不是对象也不是函数，用x完成(fulfill)promise
如果一个promise被一个thenable resolve,并且这个thenable参与了循环的thenable环，
[[Resolve]](promise, thenable)的递归特性最终会引起[[Resolve]](promise, thenable)再次被调用。
遵循上述算法会导致无限递归，鼓励（但不是必须）实现检测这种递归并用包含信息的TypeError作为reason拒绝（reject）3.6
3.备注
3.1这里的"平台代码"
指的是引擎，环境和promise执行代码。在实践中，此要求确保onFulfilled和onRejected
能够异步执行，在then被调用之后传入事件环，并使用新的栈。这可以使用诸如setTimeout或setImmediate之类的“宏任务”机制，
或者使用诸如MutationObserver或process.nextTick之类的“微任务”机制来实现。
由于promise实现被认为是平台代码，因此它本身可能包含一个任务调度队列或调用处理程序的“trampoline”。
3.2 没有this的情况
也就是说，在严格模式下，this是未定义的; 在宽松模式下，它将成为全局对象。
3.3 then必须返回promise
在实例满足所有要求的情况下，可以允许promise2 === promise1.
每个实例都必须表明是否能实现，以及在什么情况下，promise2 === promise1  ？？？
3.4 关于x
通常，当x来自当前的实例时，x才是真正的promise
This clause allows the use of implementation-specific means to adopt the state of known-conformant promises
3.5 关于x.then
这个流程首先保存x.then的引用，
然后测试这个引用，然后调用这个引用，避免多次获取x.then属性。
这些预防措施对于确保访问者属性的一致性非常重要，访问者属性的值可能在检索之间发生变化。
3.6 如何对待thenable chain
实例不应该对thenable 链的深度设置任意限制，并假设递归超出任意限制，递归会无穷。只有真正的循环才会导致TypeError.
如果遇到thenbles的无限链，那么永远递归就是正确的行为。
