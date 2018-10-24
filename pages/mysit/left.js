var app = getApp()
var util = require('../../utils/util.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    disabled: true,
    nocancel: false,
    list: [
      '请选择',
      '5分钟',
      '10分钟',
      '15分钟'
    ],
    selectedIndex: 0,
  },

  change: function (e){
    var that = this;
    this.setData({
      selectedIndex: e.detail.value
    })
    var index = this.data.selectedIndex;
    if (index != 0) {
      that.setData({
        disabled: false,
      })
    }
  },

  modalTap: function (){
    var index = this.data.selectedIndex;
    app.globalData.time = util.formatTime(new Date());
    if (index == 1) {
      app.globalData.lefttime = 5;
    } else if (index == 2) {
      app.globalData.lefttime = 10;
    } else if (index == 3) {
      app.globalData.lefttime = 15;
    }
    //将座位状态改为有事离开
    wx.request({
      url: 'https://www.cugbyouz.cn/sit_busy.php',
      header: {
        //传输接收数据的头（！！！）
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        x: app.globalData.sitno,
        t: app.globalData.time,
        lt: app.globalData.lefttime,
      },
      success: function (res) {
        wx.switchTab({
          url: 'sit',
          success: function (e) {
            var page = getCurrentPages().pop();
            if (page == undefined || page == null) return;
            page.onShow();
          }
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