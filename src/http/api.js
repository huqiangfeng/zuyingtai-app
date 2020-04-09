/* eslint-disable no-tabs */
import {
  post
} from './http'
import store from '../store'
// 用户信息授权
export const gitToken = (parameter) => {
  return new Promise((resolve, reject) => {
    let data = {
      encryptedData: JSON.stringify(parameter.encryptedData),
      iv: JSON.stringify(parameter.iv),
      signature: parameter.signature,
      code: parameter.code
    }
    post('/ma/public/login', data)
      .then(res => {
        if (res.code === 0) {
          resolve(res)
          wx.setStorageSync('token', res.data.token)
          store.dispatch('setLogin', {
            isLogin: true
          })
          store.dispatch('setShowLogin', {
            isShowLogin: false
          })
        } else {
          reject(res)
        }
      }).catch(err => {
        reject(err)
      })
  })
}
// 判断是否授权用户信息
export const isAuthorization = (url, data) => {
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

// 获取用户信息
export const getUserInfo = () => {
  post('/ma/user/myInfo')
    .then(res => {
      if (res.code === 0) {
        store.dispatch('setUserInfo', {
          userInfo: res.data
        })
      }
    })
}
// 会员登录
export const publicLogin = (parameter) => post('/ma/public/login', parameter)
/*
  快递信息
  expressNo	快递单号	false  string
*/
export const expressDetail = (parameter) => post('/ma/express/detail', parameter)
/*
  积分记录
*/
export const integralRecord = (parameter) => post('/ma/points/listRecord', parameter)
/*
  签到
*/
export const sign = (parameter) => post('/ma/points/sign', parameter)

// 获取图片页 （首页图片）
export const getImagePage = (parameter) => post('/ma/page/getImagePage', parameter)
/*
   获取商品列表
    brandId	品牌标识
    goodsName	商品名称
    goodsSort	排序 {defaultSort:默认,releaseDesc:最新,rentPriceDesc:价格降序,rentPriceAsc:价格升序
    vip	vip专享.会员专享:1
*/
export const listGoods = (parameter) => post('/ma/goods/listGoods', parameter)
/*
   获取商品详情
goodsId	商品标识
*/
export const detailGoods = (parameter) => post('/ma/goods/detailGoods', parameter)

// 获取收藏商品列表
export const listFavorites = (parameter) => post('/ma/goods/listFavorites', parameter)

/*
  商品是否收藏
goodsId 商品标识
*/
export const isLikeGoods = (parameter) => post('/ma/goods/isLike', parameter)
/*
 收藏指定商品
goodsId 商品标识
*/
export const likeGoods = (parameter) => post('/ma/goods/like', parameter)
/*
 取消收藏指定商品
goodsId 商品标识
*/
export const unlike = (parameter) => post('/ma/goods/unlike', parameter)
/*
 获取品牌列表
*/
export const listBrand = (parameter) => post('/ma/brand/listBrand', parameter)
/*
 获取品牌详情
 brandId	品牌标识
*/
export const detailBrand = (parameter) => post('/ma/brand/detailBrand', parameter)
/*
 新增收货地址
addrAddress	收货人地址
addrArea	收货人地区
addrContact	收货人姓名
addrDefault	addrDefault
addrPhone	收货人手机
*/
export const addUserAddr = (parameter) => post('/ma/userAddr/add', parameter)
/*
 删除收货地址
addrId	addrId
*/
export const deleteUserAddr = (parameter) => post('/ma/userAddr/delete', parameter)
/*
 获取收货地址
*/
export const getAddrList = (parameter) => post('/ma/userAddr/list', parameter)
/*
 设置默认地址
 addrId	addrId
*/
export const setDefaultAddr = (parameter) => post('/ma/userAddr/setDefault', parameter)
/*
 修改收货地址
 addrId	addrId
 addrAddress	收货人地址
addrArea	收货人地区
addrContact	收货人姓名
addrDefault	是否默认地址 {0:否,1:是}
addrId	地址标识
addrPhone	收货人手机
*/
export const updateAddr = (parameter) => post('/ma/userAddr/update', parameter)
/*
获取奖励列表
*/
export const listReward = (parameter) => post('/ma/staff/listReward', parameter)
/*
设置支付宝账户
account	支付宝账户
realName	真实姓名
*/
export const setAlipay = (parameter) => post('/ma/staff/setAlipay', parameter)
/*
1对1管家服务
formMobile	手机/微信
formName	姓名
*/
export const stewardService = (parameter) => post('/ma/form/service', parameter)
/*
申请成为推手
formMobile	手机/微信
formName	姓名
*/
export const applySpreader = (parameter) => post('/ma/form/spreader', parameter)
/*
会员中心
*/
export const vipInfo = (parameter) => post('/ma/vip/info', parameter)
/*
查看所有会员
*/
export const listVip = (parameter) => post('/ma/vip/listVip', parameter)
/*
购买VIP会员
*/
export const payVip = (parameter) => post('/ma/vip/payVip', parameter)
/*
获取订单列表
orderFilter  订单状态.待支付:unpaid,待收货:sending,待归还:using,归还中:returning
*/
export const listOrder = (parameter) => post('/ma/goodsOrder/listOrder', parameter)
/*
获取订单详情
orderId	订单标识
*/
export const detailOrder = (parameter) => post('/ma/goodsOrder/detailOrder', parameter)
/*
获取商品预支付相关信息
goodsId	商品标识
*/
export const goodsPrepayInfo = (parameter) => post('/ma/goodsOrder/prepayInfo', parameter)
/*
用户下单
addrId	地址标识	query
goodsId	商品标识	query
insure	是否保险.购买免赔险:1	query
orderAmount	付款金额
rentDays	租借天数
*/
export const createOrder = (parameter) => post('/ma/goodsOrder/createOrder', parameter)
/*
订单付款
orderId	订单标识
*/
export const payOrder = (parameter) => post('/ma/goodsOrder/payOrder', parameter)
/*
订单删除 //关闭的订单才可以删除
orderId	订单标识
*/
export const deleteOrder = (parameter) => post('/ma/goodsOrder/deleteOrder', parameter)
/*
确认收货
orderId	订单标识
*/
export const received = (parameter) => post('/ma/goodsOrder/received', parameter)
/*
归还商品
expressNo	快递单号
orderId	订单标识
*/
export const sendBack = (parameter) => post('/ma/goodsOrder/sendBack', parameter)
/*
查看所有服务
expressNo	快递单号
orderId	订单标识
*/
export const listService = (parameter) => post('/ma/service/listService', parameter)
/*
服务的预支付信息 （ 鉴定，养护）
serviceId	服务标识
*/
export const servicePrepayInfo = (parameter) => post('/ma/service/prepayInfo', parameter)
/*
购买服务
identifyId	identifyId
serviceId	鉴定服务标识
*/
export const buyService = (parameter) => post('/ma/service/buyService', parameter)
