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
    }

  },

  /**
   * 页面的初始数据
   */
  data: {
    "platsByRestaurant": [
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
        "id": 4,
        "name": "饺子",
        "restaurantId": 1,
        "image": null,
        "price": 8.5,
        "description": "张张饺子",
        "aimer": 1,
        "isSpecial": false,
        "tags": [
          {
            "platTag": "饺子"
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      resto: options.id
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