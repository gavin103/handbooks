问题1：
设计一个el方法

const ul = el(
  'ul',
  {id:'app'},
  [
    el('li',{class:'item',['item1']})
    el('li',{class:'item',['item2']})
    el('li',{class:'item',['item3']})
  ]
)

let uRoot = ul.render();

body.appendChild(uRoot)

更新html为：
<ul id="app">
  <li class="item">item1</li>
  <li class="item">item2</li>
  <li class="item">item3</li>
</ul>

问题2：实现归并排序mergeSort

问题3：React的fiber是为了解决什么问题

问题4: React的虚拟Dom是为了解决什么问题

