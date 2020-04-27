import {
  uploadImg
} from './../http/api'
export default {
  data: {
    images: [] // 图片
  },
  methods: {
    // 选图片
    imgRead(event) {
      const {
        file
      } = event.$wx.detail
      file.forEach(element => {
        this.uploadImg(element.path)
      })
    },
    // 上传图片
    uploadImg(file) {
      let _this = this
      uploadImg({
        file: file,
        module: 'item'
      }).then((res) => {
        if (res.code === 0) {
          _this.images = [..._this.images, res.data]
        }
      }).catch((err) => {})
    },
    // 删除图片
    imgDelete(event) {
      let index = event.$wx.detail.index
      this.images.splice(index, 1)
    }
  },
  created() {}
}
