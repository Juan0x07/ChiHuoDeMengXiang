// pages/index5/index5.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    navbar: [ '我的租房', '我的二手', '我的生活'],
    currentTab: 0,
    datac:0,
    data1: [{
      "id": 1,
      "image1": null,
      "image2": null,
      "image3": null,
      "owner": 1,
      "title": "三大附近好房出租",
      "description": "家电俱全",
      "location": "118 route de narbonne",
      "surface": 20.7,
      "price": 350,
      "start": "2019-03-07T00:00:00.000+0000",
      "locationtag": "三大附近",
      "traffictag": "A线沿线",
      "contactName": "张女士",
      "contactNum": "0608787878",
      "contactWechat": "10001000",
      "orders": 1,
      "long": true,
      "shared": false
    }],
    data2: [{
      "id": 2,
      "owner": 2,
      "name": "显示屏",
      "image": null,
      "discription": "出一个电脑显示屏，九成新",
      "price": 67,
      "contactName": "王同学",
      "contactNum": "0610101010",
      "contactWechat": "987654321",
      "aimer": 2,
      "tag": "学习"
    }],
    data3: [{
      "id": 1,
      "title": "求翻译",
      "description": "找翻译呀找翻译",
      "tag": "求助",
      "owner": 1
    }],
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success(res) {
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
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