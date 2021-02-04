// const object1 = {
//     [Symbol.toPrimitive](hint) {
//       if (hint === 'number') {
//         return 2333;
//       }
//       if(hint === 'string'){
//         return 'string'
//       }
//       if(hint === 'default'){
//         return 'default'
//       }
//       return null;
//     }
//   };
  
//   console.log(+object1); // 2333
//   console.log(''+object1); // default
//   console.log(String(object1)) // string

const add=(...res)=>{
    let args = [...res];
    const addArgs = (...subRes)=>{
        args = args.concat(subRes)
        return addArgs
    }

    addArgs.toString = ()=>args.reduce((x,y)=>x+y,0)

    return addArgs
}

console.log(typeof add(1)(2)(3))               
const fn = add(1, 2, 3)(4)
console.log(fn)          
console.log(add(1)(2)(3)(4)(5))          
console.log(add(2, 6)(1))             

// let obj2 = {
//     i:123,
//     valueOf: function() {
//       console.log('valueOf');
//       return this.i
//     }
//   }
//   alert(obj2 );// [object Object]
//   alert(+obj2 ); // 123 valueOf
//   alert('a'+obj2 ); // a123 valueOf
//   alert(String(obj2 )); // [object Object]
//   alert(Number(obj2 )); // 123  valueOf
//   alert(obj2 == '123'); // true
//   alert(obj2 === '123'); // false