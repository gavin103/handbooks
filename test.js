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
  
//   console.log(+object1);
//   console.log(''+object1);
//   console.log(String(object1))

const add=(...res)=>{
    let args = [...res];
    const addArgs = (...subRes)=>{
        args = args.concat(subRes)
        return addArgs
    }

    addArgs.toString = ()=>args.reduce((x,y)=>x+y,0)

    return addArgs
}

console.log(add(1)(2)(3))                // 6
console.log(add(1, 2, 3)(4))             // 10
console.log(add(1)(2)(3)(4)(5))          // 15
console.log(add(2, 6)(1))                // 9
