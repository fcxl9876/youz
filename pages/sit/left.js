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
    selectedIndex: 0
  },

  change: function (e){
    this.setData({
      selectedIndex: e.detail.value,
      disabled: false
    })
  },

  confirm: function (){
    //将座位状态改为有事离开

    //跳转到我的座位界面
    wx.navigateTo({
      url: 'sit3',
    })
  },

  cancel: function (){
    this.setData({
      hidden: true
    })
  },

  modalTap: function (){
    this.setData({
      hidden: false
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