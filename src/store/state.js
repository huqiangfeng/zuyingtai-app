export default {
  baseImageSrc: 'https://rent-luxury.oss-cn-shanghai.aliyuncs.com/miniapp/dev/images/',
  // tab选项
  footer: 0,
  // 会员
  member: false,
  // 是否登录
  login: false,
  // 显示登录弹框
  isShowLogin: false,
  // 登录的ocde
  code: '',
  // 用户信息
  userInfo: {
    createTime: '', // 创建时间
    spreaderCode: null, // 推广code
    spreaderReward: null, // 报酬
    spreaderRole: null, // 推手角色
    userAvatar: '', // 头像
    userGender: 1, // 性别
    userGenderDisplay: '', // 性别
    userId: null, // id
    userMobile: null, // 手机
    userNickname: '', // 名字
    userPoints: 0, // 积分
    memberBalance: 0, // member余额
    memberExpireDate: null, // member终止时间
    memberLevel: '0', // member级别
    memberLevelDisplay: null, //  member级别名称
    memberSpreaderId: null // member推广id
  }
}
