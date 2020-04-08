import baseUrl from './baseUrl'
import store from '../store'
// 获取token
function gitToken(data, code) {
  return new Promise((resolve, reject) => {
    post('/ma/public/login', {
        encryptedData: JSON.stringify(data.encryptedData),
        iv: JSON.stringify(data.iv),
        signature: data.signature,
        code: code
      })
      .then(res => {
        if (res.code === 0) {
          resolve(res)
          wx.setStorageSync('token', res.data.token)
          store.dispatch('setLogin', {
            isLogin: true
          })
        } else {
          reject(res)
        }
      }).catch(err => {
        reject(err)
      })
  })
}
// 判断是否授权
function isAuthorization(url, data) {
  return new Promise((resolve, reject) => {
    // 查看是否授权
    wx.getSetting({
      success(authorization) {
        if (authorization.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.login({}).then((code) => {
            wx.getUserInfo({
              success(res1) {
                gitToken(res1, code.code).then(res => {
                  if (url) {
                    post(url, data).then((res) => {
                      resolve(res)
                    }).catch((err) => {
                      reject(err)
                    })
                  }
                })
              }
            })
          })
        } else {
          // 没有授权
          store.dispatch('setShowLogin', {
            isShowLogin: true
          })
        }
      }
    })
  })
}

const post = (url, data) => {
  if (data) {
    initDataK(data)
  }
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: baseUrl + url,
      data: data,
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        token: wx.getStorageSync('token')
      },
      success(res) {
        wx.hideLoading()
        if (res.data.code === 0) {
          initDataK(res)
          // TODO 回传所有数据
          resolve(res.data)
        } else if (res.data.code === 401) {
          // 重新获取token 并且重新发送请求
          isAuthorization(url, data).then((res) => {
            resolve(res)
          }).catch((err) => {
            reject(err)
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
export default {
  post,
  isAuthorization
}
