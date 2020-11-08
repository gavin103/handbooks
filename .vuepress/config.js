module.exports = {
  "title": "handbook",
  "description": "来自Gavin103的行者记录",
  "base": "/",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "前端积累",
        "icon": "reco-api",
        "items": [
          {
            "text": "JS数据结构",
            "link": "/docs/datastructures/"
          },
          {
            "text": "JS算法",
            "link": "/docs/algorithms/"
          },
          {
            "text": "读WebKit技术内幕",
            "link": "/docs/webkit/"
          },
          {
            "text": "读高性能JavaScript",
            "link": "/docs/performance/"
          },
          {
            "text": "面试题",
            "link": "/docs/interview/"
          },
        ]
      },
      {
        "text": "图书馆",
        "link": "/docs/books/",
        "icon": "reco-blog"
      },
      // {
      //   "text": "时间轴",
      //   "link": "/timeline/",
      //   "icon": "reco-date"
      // },
      {
        "text": "联系我",
        "icon": "reco-github",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/gavin103",
          },
          {
            "text": "掘金",
            "link": "https://juejin.im/user/2840793775873527",
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/datastructures/": [
        "",
        "theme",
        "plugin",
      ],
      "/docs/algorithms/": [
        "",
        {
          "title": "排序算法",
          "collapsable": false,
          "children": [
            { "title": "冒泡排序", "path": "/docs/algorithms/sort/bubble" },
            { "title": "选择排序", "path": "/docs/algorithms/sort/selection" },
            { "title": "插入排序", "path": "/docs/algorithms/sort/insertion" },
            { "title": "归并排序", "path": "/docs/algorithms/sort/merge" },
            { "title": "计数排序", "path": "/docs/algorithms/sort/counting" },
            { "title": "桶排序", "path": "/docs/algorithms/sort/bucket" },
            { "title": "基数排序", "path": "/docs/algorithms/sort/radix" },
          ]
        },
        {
          "title": "搜索算法",
          "collapsable": false,
          "children": [
            { "title": "顺序搜索", "path": "/docs/algorithms/search/sequential" },
            { "title": "二分搜索", "path": "/docs/algorithms/search/binary" },
            { "title": "内插搜索", "path": "/docs/algorithms/search/interpolation" },
          ]
        },
        {
          "title": "随机算法",
          "collapsable": false,
          "children": [
            { "title": "Fisher-Yates 随机", "path": "/docs/algorithms/shuffle" },
          ]
        }
      ],
      "/docs/interview/": [
        "",
        {
          "title": "JS原理",
          "collapsable": false,
          "children": [
            { "title": "手写call/apply/bind", "path": "/docs/interview/js-basic/call-apply-bind" },
          ]
        },
        {
          "title": "算法题",
          "collapsable": false,
          "children": [
            { "title": "实现LRU类", "path": "/docs/interview/algo/lru" },
          ]
        }
      ],
      "/docs/webkit/": [
        "",
        "/docs/webkit/chapter01",
        "/docs/webkit/chapter02",
        "/docs/webkit/chapter03",
        "/docs/webkit/chapter04",
        "/docs/webkit/chapter05",
        "/docs/webkit/chapter06",
        "/docs/webkit/chapter07",
        // {
        //   "title": "第一章：浏览器和浏览器内核",
        //   "collapsable": false,
        //   "children": [
        //     { "title": "实现LRU类", "path": "/docs/webkit/chapter01" },
        //   ]
        // }
      ],
      "/docs/books/": [
        "",
        {
          "title": "编程类",
          "collapsable": true,
          "children": [
            { "title": "基于MVC的JavaScript.Web富应用开发", "path": "/docs/books/book_0001" },
            { "title": "精通正则表达式（第3版）", "path": "/docs/books/book_0002" },
            { "title": "高性能JavaScript", "path": "/docs/books/book_0004" },
            { "title": "WebKit技术内幕", "path": "/docs/books/book_0005" },
            { "title": "深入理解ES6", "path": "/docs/books/book_0006" },
            { "title": "学习JavaScript数据结构与算法（第3版）", "path": "/docs/books/book_0008" },
            { "title": "Web性能权威指南", "path": "/docs/books/book_0009" },
            { "title": "你不知道的JavaScript", "path": "/docs/books/book_0010" },
            { "title": "JavaScript高级程序设计（第4版）", "path": "/docs/books/book_0011" },
          ]
        },
        {
          "title": "架构类",
          "collapsable": true,
          "children": [
            { "title": "大型网站技术架构_核心原理与案例分析", "path": "/docs/books/book_0007" },
          ]
        },
        {
          "title": "网络类",
          "collapsable": true,
          "children": [
            { "title": "HTTP权威指南", "path": "/docs/books/book_0003" },
          ]
        },
        {
          "title": "其他",
          "collapsable": true,
          "children": [
            // { "title": "第一本书", "path": "/docs/books/fe_book_0001" },
          ]
        },

      ],
      "/docs/performance/": [
        "",
        "/docs/performance/chapter01",
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 3,
        "text": "博文杂记"
      },
      "tag": {
        "location": 5,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "gavin103",
    "authorAvatar": "/avatar.png",
    "record": "感谢recoluan提供的主题",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}