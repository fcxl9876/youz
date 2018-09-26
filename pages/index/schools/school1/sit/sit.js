// pages/index/schools/school1/sit/sit1.js
var app = getApp()
var util = require('../../../../../utils/util.js'); 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    nocancel: true,
    sitno: null,
    use: false,
  },

  cancel: function () {
    this.setData({
      hidden: true
    });
  },

  modalTap: function (e) {
    var that = this;
    this.setData({
      hidden: false
    })
  },

  confirm: function () {
    this.setData({
      hidden: true
    })
    app.globalData.usetime = util.formatTime(new Date());
    wx.request({
      url: 'https://www.cugbyouz.cn/sit_use.php',
      header: {
        //传输接收数据的头（！！！）
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        x: app.globalData.sitno,
        y: app.globalData.openid,
        t: app.globalData.usetime,
      },
      success: function (res) {
        //跳转到我的座位界面
        wx.switchTab({
          url: '../../../../mysit/sit',
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      sitno:app.globalData.sitno,
    })
    wx.request({
      url: 'https://www.cugbyouz.cn/check.php',
      header: {
        //传输接收数据的头（！！！）
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        x: app.globalData.openid
      },
      success: function (res) {
        if (res.data){
          that.setData({
            use: true,
          })
        }
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
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
