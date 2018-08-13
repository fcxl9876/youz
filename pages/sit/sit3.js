var timer;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden1: true,
    hidden2: true,
    nocancel1: false,
    nocancel2: true,
    second: 0,
  },

  modalTap1: function (){
    wx.navigateTo({
      url: 'sit1',
    })
  },

  modalTap2: function (){
    this.setData({
      hidden1: false
    })
  },

  cancel1: function () {
    this.setData({
      hidden1: true
    });
  },

  confirm1: function () {
    //将座位状态改为未使用

    //跳转到评价界面
    this.setData({
      hidden2: false
    })
  },

  confirm2: function () {
    //跳转到主页
    wx.switchTab({
      url: '../index/index',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    timer = setTimeout(function () {
      this.setData({
        second: second + 1,
      })
    }, 1000);
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