//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    assetNum: '',
    assetDetail: {},
    assetDetailShow: false,
    isQuestion: true,
    submitting: false,
    imgs: [],


    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onClickScanIcon: function (){
    this.setData({
      assetDetailShow: !this.data.assetDetailShow
    })
  },
  onAssetNumInput: function({detail}){
    console.log(detail)
  },
  onQuestion: function({detail}){
    this.setData({isQuestion: !this.data.isQuestion})
  },
  takePhoto: function(){
    console.log("take photo")
    let imgs = this.data.imgs
    if(imgs.length > 1){
      console.log("太多了")
      return
    }
    imgs.push("https://img.yzcdn.cn/vant/logo.png")
    this.setData({imgs: imgs})
  },
  onSubmit: function(){
    console.log("submit")
    this.setData({submitting: true})
    let that = this
    setTimeout(function () { 
      console.log("time ")
      that.setData({ submitting: false })
      }, 3000)
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
