// pages/index/index.js
//获取app变量
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
  
  },
  /**
   * 加载search页面
   */
  goSearch: function () {
    wx.navigateTo({
      url: '../../pages/index/search/search'
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://47.254.154.195:8083/plat/getspecialplats',
      method: 'GET',
      success: function (res) {
        console.log('data : ' + res.data);
        that.setData({
          specialPlats: res.data.specialPlats
        });
      }
    });
     wx.request({
      url: 'http://47.254.154.195:8083/restaurant/getallrestaurants',
      method: 'GET',
      success: function (res) {
        console.log('data : ' + res.data);
        that.setData({
          allRestaurants: res.data.allRestaurants
        });
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

  },
  dianji: function (e) {
    console.log(e.currentTarget.dataset.id)
    this.setData({
      isLike: !e.target.dataset.favourite
    })
  },
  /*更新点赞*/
  update_zan: function (e) {
    var that = this;
    var data = e.currentTarget.dataset;
    var mid = data.mid;
    var cookie_mid = wx.getStorageSync('zan') || [];//获取全部点赞的mid  
    var isadd = 1;
    var newmessage = [];
    if (cookie_mid.includes(mid)) {//说明已经点过赞,取消赞  
      isadd = 0;
      var m = 0;
      for (var j in cookie_mid) {
        if (cookie_mid[j] != mid) {
          newmessage[m] = cookie_mid[j];
          m++
        }
      }
      wx.setStorageSync('zan', newmessage);//删除取消赞的mid  
    } else {
      cookie_mid.unshift(mid);
      wx.setStorageSync('zan', cookie_mid);//新增赞的mid  
    }
    wx.request({
      url: app.globalData.api.api_system,
      data: {
        action: 'zannum',
        mid: mid,
        isadd: isadd,
        wxid: app.globalData.wxid
      },
      method: 'GET',
      // header: {},   
      success: function (res) {
        var message = that.data.message;
        for (var i in message) {
          if (message[i].mid == mid) {
            if (isadd) {
              message[i].zan = parseInt(message[i].zan) + 1
            } else {
              message[i].zan = parseInt(message[i].zan) - 1
            }

          }
        }
        that.setData({
          message: message
        })
      }
    })
    }

})
