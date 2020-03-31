/* eslint-disable no-extend-native */
/*******************************************************************************
 * 日期输出为IOS格式标准日期格式 <br>
 * new Date().toFormatorString('yyyy-mm-dd hh:mi:ss'):
 */
Date.prototype.toFormatorString = function (formator) {
  var returnText = formator.toUpperCase()
  if (returnText.indexOf('YYYY') > -1) {
    returnText = returnText.replace('YYYY', this.getFullYear())
  }

  if (returnText.indexOf('MM') > -1) {
    let s = this.getMonth() + 1
    if (s < 10) {
      s = '0' + s
    }
    returnText = returnText.replace('MM', s)
  }

  if (returnText.indexOf('DD') > -1) {
    let s = this.getDate()
    if (s < 10) {
      s = '0' + s
    }
    returnText = returnText.replace('DD', s)
  }

  if (returnText.indexOf('HH') > -1) {
    let s = this.getHours()
    if (s < 10) {
      s = '0' + s
    }
    returnText = returnText.replace('HH', s)
  }

  if (returnText.indexOf('MI') > -1) {
    let s = this.getMinutes()
    if (s < 10) {
      s = '0' + s
    }
    returnText = returnText.replace('MI', s)
  }

  if (returnText.indexOf('SS') > -1) {
    let s = this.getSeconds()
    if (s < 10) {
      s = '0' + s
    }
    returnText = returnText.replace('SS', s)
  }

  if (returnText.indexOf('SI') > -1) {
    returnText = returnText.replace('SI', this.getMilliseconds())
  }
  return returnText
}

/*******************************************************************************
 * 日期按月添加
 */
Date.prototype.addMonths = function (months) {
  var dat1 = new Date(this.valueOf())
  dat1.setMonth(dat1.getMonth() + months)
  return dat1
}
/*******************************************************************************
 * 日期按天加
 */
Date.prototype.addDays = function (days) {
  var dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days)
  return dat
}

/*******************************************************************************
 * 日期按小时添加
 */
Date.prototype.addHours = function (hours) {
  var dat1 = new Date(this.valueOf())
  dat1.setHours(dat1.getHours() + hours)
  return dat1
}

/*******************************************************************************
 * 日期按分钟添加
 */
Date.prototype.addMinutes = function (minutes) {
  var dat2 = new Date(this.valueOf())
  dat2.setMinutes(dat2.getMinutes() + minutes)
  return dat2
}
/*******************************************************************************
 * 字符串转日期 2012-01-01 转为日期对象 <br>
 * 20120101 也可以转
 */
String.prototype.toDate = function () {
  var temp = this.toString()
  temp = temp.replace(/-/g, '/')
  if (temp.lastIndexOf('/', 0) === -1 && temp.length === 8) {
    var newstr = temp.substring(0, 4) + '/'
    newstr += temp.substring(4, 6) + '/'
    newstr += temp.substring(6, 8)
    temp = newstr
  }
  var date = new Date(Date.parse(temp))
  return date
}

/*******************************************************************************
 * 将时间“2017-2-14”转换为“2017-02-14 00：00：00”
 */
String.prototype.toISODateformat = function (date) {
  return date.toDate().toFormatorString('yyyy-mm-dd hh:mi:ss')
}

// ----------------------------

// 验证是否是手机号码
function vailPhone(number) {
  let flag = true
  let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/
  if (number.length !== 11 || !myreg.test(number)) {
    flag = false
  }
  return flag
}
//  去除字符串所有空格
function sTrim(text) {
  return text.replace(/\s/g, '')
}

function isLogin() {
  // 判断是否有token , 没有token 则去登录页面授权登录；
  let token = wx.getStorageSync('token')
  if (!token) {
    wx.clearStorage()
    // wx.redirectTo({
    wx.navigateTo({
      url: '/packageLogin/pages/loginIndex'
    })
  }
}
module.exports = {
  sTrim,
  vailPhone,
  isLogin
}
