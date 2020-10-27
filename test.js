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