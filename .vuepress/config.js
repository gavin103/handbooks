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
        "icon": "reco-category",
        "items": [
          {
            "text": "JS数据结构",
            "link": "/docs/datastructures/"
          },
          {
            "text": "JS算法",
            "link": "/docs/algorithms/"
          },
        ]
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
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
        "plugin",
        "api"
      ],
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 3,
        "text": "随笔"
      },
      "tag": {
        "location": 4,
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