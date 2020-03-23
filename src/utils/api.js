let basicsUrl = 'https://vend.flow.redcloud.vip'

function initDataK(data) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (data[key] == null || data[key] === undefined) {
        data[key] = ''
      }
      if (data[key] instanceof Object) {
        initDataK(data[key])
      }
    }
  }
}
// request get 请求
const httpPost = (url, data) => {
  if (data) {
    initDataK(data)
  }
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: basicsUrl + url,
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        token: wx.getStorageSync('token')
      },
      data: data,
      success: async function (res) {
        wx.hideLoading()
        if (res.data.code === 0) {
          initDataK(res)
          // TODO 回传所有数据
          resolve(res.data)
        } else if (res.data.code === 300) {
          wx.showToast({
            title: '登录失效',
            icon: 'none',
            duration: 2000
          })
          wx.clearStorage()
          wx.redirectTo({
            url: '/packageLogin/pages/loginIndex'
          })
        } else {
          resolve(res.data)
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function (err) {
        wx.hideLoading()
        wx.showToast({
          title: '网络错误请稍后重试',
          icon: 'none',
          duration: 2000
        })
        reject(err)
      }
    })
  })
}
export default {
  httpPost
}
