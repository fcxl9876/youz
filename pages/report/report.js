var timer;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 指定是原图还是压缩图，默认二者都有
      sourceType: ['camera', 'album'], // 指定来源为相机
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
    timer = setTimeout(function () {
      wx.showToast({
        title: '审核成功',
        icon: 'success',
        duration: 2000,
      })
      wx.request({
        url: 'https://www.cugbyouz.cn/sit_left.php',
        header: {
          //传输接收数据的头（！！！）
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          x: app.globalData.sitno
        },
        success: function (res) {
        },
        fail: function (res) {
          // fail
        },
        complete: function (res) {
          // complete
        }
      })
      wx.reLaunch({
        url: '../index/index',
      })
    }, 5000);
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