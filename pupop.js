// components/popup/popup.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: ''
    },
    cancelText: {
      type: String,
      value: ''
    },
    confirmText: {
      type: String,
      value: ''
    },
    imgUrl: {
      type: String,
      value: ''
    },
    showModal: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {

    cancelEvent() {
      this.triggerEvent('cancelEvent')
    },

    confirmEvent() {
      this.triggerEvent('confirmEvent')
    }
  }
})
