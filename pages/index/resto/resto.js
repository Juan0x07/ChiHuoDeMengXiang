// pages/index/resto/resto.js
Page({
  menuClick: function (e) {
    this.setData({
      num: e.target.dataset.num
    })
    if (e.target.dataset.num==2){
      this.setData({
        data: "历史"
      })
    }else{
      this.setData({
        data: "吃的"
      })
    }

  },
  /**
   * 页面的初始数据
   */
  data: {
    data: "吃的",
    resto:"chez hong",
    plat: {
      name: "肉",
      image: "url",
      price: "66",
      order: "1"
    },
    plat1: {
      name: "肉1",
      image: "url2",
      price: "6",
      order: "2"
    }
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})