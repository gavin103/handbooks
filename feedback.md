1.1
```js
const method = "GET"
const params = {
  startDate: "2020-10-20", //必传参数，筛选起始时间
  endDate: "2020-11-03", //必传参数，筛选终止时间
  nation: "", //非必传参数，筛选国家，不传则返回全部
  team: "" //非必传参数，筛选球队，不传则返回全部
}
const mock01 = {
  code: 1,
  data: {
    hasMore: true, // 是否有更多数据
    startDate: "2020-10-20", //当前列表起始时间
    endDate: "2020-11-03", //当前列表终止时间
    nation:"",
    team:"",
    tips: "",
    list: [
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" },
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" },
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" },
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" },
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" },
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" },
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" },
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" },
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" },
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" },
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" },
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" },
    ]
  },
  msg: '成功'
}

const mock02 = {
  code: 1,
  data: {
    hasMore: false, // 是否有更多数据
    startDate: "2020-10-20", //当前列表起始时间
    endDate: "2020-11-03", //当前列表终止时间
    tips: "没有更多了",
    nation:"",
    team:"",
    list: [
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" },
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" },
      { nation: "xxx", team: "yyy", score: "zzz", date: "2020-1--27" }, ac
    ]
  },
  msg: '成功'
}
```

1.2

```js
// 因为对vue了解不深，所以用react写的
import React from 'react'
import List from '../List';
import moment from 'moment'
import { pick } from 'lodash'

const request = () => { }
const ifScrollToTop = () => { }
const ifScrollToBottom = () => { }
const DATE_FORMAT = "YYYY-MM-DD"
const ADD_BEFORE = 1
const ADD_AFTER = 0
class Search extends React.Component {
  state = {
    hasMore: true, // 是否有更多数据
    startDate: moment().subtract(7, 'days').format(DATE_FORMAT), //当前列表起始时间
    endDate: moment().add(7, 'days').format(DATE_FORMAT), //当前列表终止时间
    tips: "",
    list: [],
    nation: "",
    team: ""
  }
  componentDidMount() {
    this.handleSearch()
  }
  handleSearch = (params) => {
    this.setState({ params }, this.getData)
  }
  getData = (addPosition = ADD_AFTER) => {
    const paramNames = ['startDate', 'endDate', 'nation', 'team']
    const params = pick(this.state, paramNames)
    request(url, params).then(res => {
      const { code, msg, data } = res;
      // data = {
      //   hasMore: false, // 是否有更多数据
      //   startDate: "2020-10-20", //当前列表起始时间
      //   endDate: "2020-11-03", //当前列表终止时间
      //   nation:"",
      //   team:"",
      //   tips: "没有更多了",
      //   list: []
      // }
      if (code === 1) {
        const list = addPosition === ADD_BEFORE
          ? [...data.list, ...this.state.list]
          : [...this.state.list, ...data.list]
        this.setState(...data, list)
      } else {
        alert(msg);
      }
    }).catch(e => alert(e))
  }

  handleScroll = () => {

    if (ifScrollToTop()) {
      this.getData(ADD_BEFORE)
    }
    if (this.state.hasMore && ifScrollToBottom()) {
      this.getData(ADD_AFTER)
    }
  }

  render() {
    return (
      <div onScroll={this.handleScroll}>
        {/* 搜索组件 */}
        <Form
          onSearch={this.handleSearch}
        />
        {/* 列表组件 */}
        <List data={this.state.list} />
      </div>
    )
  }
}

export default Search
```

2.1
```js
function request(params) {
  return new Promise((resolve, reject) => {
    xxx.request({
      params,
      success: (ret) => {
        resolve(ret)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

function wrappedRequest() {
  const promiseList = []
  let status = "empty" //empty,ongoing
  function start() {
    while (promiseList.length > 0) {
      status = "ongoing"
      const tmp = promiseList[0]
      request(tmp).then(res => {
        if (res.code === 999) {
          setTimeout(start, 500)
        }
        promiseList.unshift()
        if (res.code === 1) {
          return res.data
        }
        return res
      }).catch(e => alert(e))
    }
    status = "empty"
  }
  return function (param) {
    promiseList.push(param)
    if (status === "empty") {
      start()
    }
  }
}

const pendingRequest = wrappedRequest()

```