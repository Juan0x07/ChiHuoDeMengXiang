// pages/index4/myhelp/myhelp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit: function (e) {
    var that = this;
    if (that.data.id) {
      that.setData({
        url: 'http://47.254.154.195:8083/disscussion/modifydiscussion'
      })
    }
    else {
      that.setData({
        url: 'http://47.254.154.195:8083/disscussion/adddiscussion'
      })
    }
    wx.request({
      url:that.data.url,
      method: 'POST',
      data: {
        "owner": getApp().globalData.userid,
        "title": e.detail.value.title,
        "description": e.detail.value.description,
      },
      success() {
        wx.switchTab({
          url: "/pages/index4/index4"
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      id: options.id
    });
    if (options.id) {
      wx.request({
        url: 'http://47.254.154.195:8083/discussion/getdiscussionbyid?discussionId=' + that.data.id,
        method: 'GET',
        success: function (res) {
          that.setData({
            title: res.data.discussionById.title,
            description: res.data.discussionById.description,
          });
          console.log(res.data.discussionById)
          console.log(that.data)
        }
      });
    }
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