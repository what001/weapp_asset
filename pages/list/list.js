// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    assetList: [{ "title": "AD988", "status": "使用中", "desc": "移动设备", "other": [{ "key": "部门", "value": "数据中心" }, { "key": "商品", "value": "笔记本" }] }, { "title": "DED", "status": "使用中", "desc": "移动设备" }, { "title": "AD988", "status": "使用中", "desc": "移动设备", "other": [{ "key": "部门", "value": "数据中心" }, { "key": "商品", "value": "笔记本" }] }, { "title": "DED", "status": "使用中", "desc": "移动设备" }, { "title": "AD988", "status": "使用中", "desc": "移动设备", "other": [{ "key": "部门", "value": "数据中心" }, { "key": "商品", "value": "笔记本" }] }, { "title": "DED", "status": "使用中", "desc": "移动设备" }],
    showDetail: false,
    assetDetail: [{"key": "部门", "value": "数据中心"}, {"key": "商品", "value": "笔记本"}]
  },

  onShowDetail: function({target}){
    console.log(target.dataset.id)
    this.setData({showDetail: true})
  },
  onCloseDetail: function(){
    this.setData({showDetail: false})
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("aaaa")
    let alist = this.data.assetList

    alist.concat(this.data.assetList)
    console.log(alist)
    this.setData({ assetList: this.data.assetList.concat(alist)})
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})