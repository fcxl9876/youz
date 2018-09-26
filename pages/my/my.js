var app = getApp()
Page({
  data: {
    name: null,
    openid: null,
    imgUrl: null,
    sex: null,
  },
  onLoad: function () {
    //页面初始化
    var that = this;
    wx.getStorage({
      key: 'name',
      success: function(res) {
        that.setData({
          name: res.data
        })
      },
    })
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        that.setData({
          openid: res.data
        })
      },
    })
    wx.getStorage({
      key: 'imgUrl',
      success: function (res) {
        that.setData({
          imgUrl: res.data
        })
      },
    })
    wx.getStorage({
      key: 'sex',
      success: function (res) {
        that.setData({
          sex: res.data
        })
      },
    })
  },

  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'name',
      success: function (res) {
        that.setData({
          name: res.data
        })
      },
    })
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        that.setData({
          openid: res.data
        })
      },
    })
    wx.getStorage({
      key: 'imgUrl',
      success: function (res) {
        that.setData({
          imgUrl: res.data
        })
      },
    })
    wx.getStorage({
      key: 'sex',
      success: function (res) {
        that.setData({
          sex: res.data
        })
      },
    })
  }
})