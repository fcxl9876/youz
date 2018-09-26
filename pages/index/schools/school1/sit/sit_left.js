// pages/index/schools/school1/sit/sit1_left.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    sitno: null,
    time: null,
    lefttime: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      sitno: app.globalData.sitno,
    })
    var that = this;
    wx.request({
      url: 'https://www.cugbyouz.cn/gettime.php',
      header: {
        //传输接收数据的头（！！！）
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        x: app.globalData.sitno,
      },
      success: function (res) {
        that.setData({
          result: res.data
        });
        app.globalData.time = that.data.result[0].left;
        app.globalData.lefttime = that.data.result[0].lefttime;
        that.setData({
          time: app.globalData.time,
          lefttime: app.globalData.lefttime,
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