// appID: wx5888edd264b00a05
// appSecret: 56f2dd2d7deb3380520f578fe0f6cb66

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
            "text": "读HTTP权威指南",
            "link": "/docs/http/"
          },
          {
            "text": "前端学Java",
            "link": "/docs/java/"
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
      "/docs/http/": [
        "",
        "/docs/http/section1",
        "/docs/http/chapter01",
        "/docs/http/chapter02",
        "/docs/http/chapter03",
        "/docs/http/chapter04",
        "/docs/http/section2",
        "/docs/http/chapter05",
        "/docs/http/chapter06",
        "/docs/http/chapter07",
        "/docs/http/chapter08",
        "/docs/http/section3",
        "/docs/http/chapter11",
        "/docs/http/chapter12",
        "/docs/http/chapter13",
      ],
      "/docs/books/": [
        "",
        "/docs/books/cate_1",
        "/docs/books/cate_2",
        "/docs/books/cate_3",
        "/docs/books/cate_4",
        "/docs/books/cate_5",
        "/docs/books/cate_6",
        "/docs/books/cate_7",
        "/docs/books/cate_8",
        "/docs/books/cate_9",
      ],
      "/docs/java/": [
        "",
        "/docs/java/day01",
        "/docs/java/day02",
        "/docs/java/day03",
      ],
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 3,
        "text": "每日一题"
      },
      "tag": {
        "location": 5,
        "text": "分类题目"
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