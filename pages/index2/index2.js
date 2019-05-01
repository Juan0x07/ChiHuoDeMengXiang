// pages/index2/index2.js
var idTime; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag1: ['不限','短租','长租'],
    ctag1:0,
    tag2: ['不限', '一大', '二大', '三大', '市中心'],
    ctag2: 0,
    tag3: ['不限', 'A线沿线', 'B线沿线','其他'],
    ctag3: 0,
    tag4: ['不限', '单人', '合租'],
    ctag4: 0,
    "allHouses": [
      {
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
      }
    ],
    //tag list
    tag: ['pikachu', 'miaow', 'irelia', 'lux', 'akali']
  },
  changeTag1:function(e){
    this.setData({
      ctag1: e.currentTarget.dataset.idx
    })
  },
  changeTag2: function (e) {
    this.setData({
      ctag2: e.currentTarget.dataset.idx
    })
  },
  changeTag3: function (e) {
    this.setData({
      ctag3: e.currentTarget.dataset.idx
    })
  },
  changeTag4: function (e) {
    this.setData({
      ctag4: e.currentTarget.dataset.idx
    })
  },
  noneAll: function (e) {
    this.setData({
      ctag1: 0,
      ctag2: 0
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