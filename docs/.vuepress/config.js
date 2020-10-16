module.exports = {
  title: "前端行者",
  description: "学习文档",
  base: '',
  themeConfig: {
    nav: [
      {
        text: '技术文档',
        items: [
          { text: '第一部分', link: 'https://github.com/gavin103/handbooks' },
        ]
      }, // 内部链接 以docs为根目录
      { text: '随笔（暂未开通）', link: 'https://baidu.com' }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/gavin103/handbooks' },
          {
            text: 'JS算法',
            link: 'https://github.com/loiane/javascript-datastructures-algorithms/tree/master/src/js/data-structures'
          }
        ]
      }
    ]
  }
}