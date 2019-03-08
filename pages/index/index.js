// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //list of plat
    plats: [{
      plat:{
        name:"一大碗肥牛饭",
        image:"../../images/plat1.jpg",
        price:"6",
        resto: 'chezhong',
        order:"1",
        id:'pikachu'
      },
      plat1: {
        name: "饺子",
        image: "../../images/plat2.jpg",
        price: "66",
        resto:'polo',
        order: "2",
        id:['miaow','pikachu']
      }
    }],
    restos: [{
      plat: {
        name: "宏记中餐馆",
        image: "../../images/plat1.jpg",
        price: "6",
        resto: 'chezhong',
        order: "1",
        id: 'pikachu'
      },
      plat1: {
        name: "冯记中餐馆",
        image: "../../images/plat2.jpg",
        price: "66",
        resto: 'polo',
        order: "2",
        id: ['miaow', 'pikachu']
      }
    }],
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