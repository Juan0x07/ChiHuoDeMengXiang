// pages/index/index.js
//获取app变量
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //list of plat
    "specialPlats": [
      {
        "id": 1,
        "name": "特色生煎包",
        "restaurantId": 1,
        "image": null,
        "price": 0.5,
        "description": "正宗上海生煎包，皮薄馅大易推倒",
        "aimer": 2,
        "isSpecial": true,
        "tags": [
          {
            "platTag": "包子"
          },
          {
            "platTag": "鲁菜"
          }
        ]
      },
      {
        "id": 2,
        "name": "水煮鱼",
        "restaurantId": 2,
        "image": null,
        "price": 10.5,
        "description": "川菜经典水煮鱼",
        "aimer": 1,
        "isSpecial": true,
        "tags": [
          {
            "platTag": "川菜"
          }
        ]
      },
      {
        "id": 3,
        "name": "私厨小炒",
        "restaurantId": 3,
        "image": null,
        "price": 8.5,
        "description": "冯氏私厨小炒，梦中的味道",
        "aimer": 1,
        "isSpecial": true,
        "tags": [
          {
            "platTag": "淮菜"
          }
        ]
      }
    ],
    "allRestaurants": [
      {
        "id": 1,
        "name": "张氏生煎包",
        "image": null,
        "bgimage": null,
        "qrcode": null,
        "address": "118 route de Narbonne, 31300, toulouse",
        "description": "正宗上海生煎包，皮薄馅大易推倒",
        "telephone": "0670707070",
        "plats": null
      },
      {
        "id": 2,
        "name": "宏记中餐馆",
        "image": null,
        "bgimage": null,
        "qrcode": null,
        "address": "11 route de Jean j, 31300, toulouse",
        "description": "中餐中餐  正宗的",
        "telephone": "0680808880",
        "plats": null
      },
      {
        "id": 3,
        "name": "冯氏小厨房",
        "image": null,
        "bgimage": null,
        "qrcode": null,
        "address": "10 route de Narbonne, 31300, toulouse",
        "description": "冯氏私家小厨房",
        "telephone": "0610101010",
        "plats": null
      }
    ]
  
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
    var that = this;//不要漏了这句，很重要
    /** wx.request({
      url: '',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          zhihu: res.data.stories,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
        })
      }
    })*/
    console.log('onLoad');
    var openid = app.globalData.openid;
    if (app.globalData.openid && app.globalData.openid != '') {    
      console.log("openid : " + openid);
    }
    setTimeout(function () {
      console.log("openid : " + app.globalData.openid);
    }, 3000) 
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
