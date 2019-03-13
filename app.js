App({
  globalData: {
    openid: null
  },
  onLaunch: function () {
    console.log('onLaunch');
    this.getData();
    this.getOpenid();
  },
  //获取用户信息
  getOpenid: function () {
    var that = this
    wx.login({
      success(res) {
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: 'http://localhost:8888/RestProject/webapi/getid/' + res.code,
            success: function (res) {
              console.log(res.data)
              console.log(res.data.openid)
              that.globalData.openid = res.data.openid
              console.log("change openid:"+that.globalData.openid)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  getData: function () {
    var that = this
    console.log("App openid: "+that.globalData.openid)
    setTimeout(function () {
    console.log("App openid: " + that.globalData.openid)
    }, 3000) 
  }
});