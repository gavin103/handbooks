```js
class Node{
  constructor(key,value){
    this.key=key
    this.value=value
    this.age=0
  }
}

class LRU{
  constructor(capacity){
    this.capacity = capacity
    this.map = {}
  }
  put(key,value){
    const newNode = new Node(key,value)
    const len = Object.keys(this.map)
    this.map[key] = newNode
    if(len>this.capacity){
      const oldKey = this.getOldKey()
      delete this.map[oldKey]
    }
  }
  getOldKey(){
    const keyList = Object.keys(this.map)
    const old={key:'',age:0}
    keyList.forEach(item => {
      const ele = this.map[item]
      if(ele.age>old.age){
        old.key = ele.key;
        old.age = ele.age
      }
    })
    return old.key
  }
  get(key){
    const keyList = Object.keys(this.map)
    let res;
    keyList.forEach(item=>{
      if(item===key){
        this.map[item].age=0
        res = this.map[item]
      }else{
        this.map[item].age +=1
      }
    })
    return res
  }
}
```