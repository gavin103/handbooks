1. css中height，padding，border，margin的顺序
2. js中可以转为false的值
3. 如何判断变量类型
4. 写一个方法，取n个2-32的随机数，组成数组
5. 实现EventEmitter
6. 问答：
```js
function getFn(){
  var fns=[];
  for(var i=0;i<3;i++){
    fns.push(function(){
      return i
    })
  }
  return fns
}
const fns = getFn()
console.log(fns[1]+fns[2])
```
- 结果是多少？为什么？
- 如何修改让结果为3？分别还用es5和es6实现

7. 用正则实现将 数字3000 转换为3,000格式。