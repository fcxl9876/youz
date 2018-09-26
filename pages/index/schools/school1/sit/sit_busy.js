// pages/index/schools/school1/sit/sit1_busy.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
    nocancel: false,
    sitno: null,
    lastid: null,
    
    result: [],
  },

  message: function (e) {
    var that = this;
    wx.request({
      url: 'https://www.cugbyouz.cn/getlastid.php',
      header: {
        //传输接收数据的头（！！！）
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        x: app.globalData.sitno
      },
      success: function (res) {
        that.setData({
          lastid: res.data,
        })
      },
      fail: function (err) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
    let _access_token = '14_cspguuNzDqXah1W7sEVht9Le5VNoDsPenVQXfrfOG0lDE9jhBMOQca3ybPc-Hp0Q5ah2nRCQR9h_4dEqB0tYR1bgcD9ZHuSNQlOjej5NMgVrMIqNU19qBhHRZMqS0ShYZXAdZZE7yCxcYix3ALObAGALWZ';
    let url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + _access_token

      ; let _jsonData = {
        access_token: _access_token,
        touser: openid,
        template_id: 'kjF6zZFL4gkSebt9X7Yq65pcdPG0-Rdt1lBkQiivz7I',
        form_id: e.detail.formId,
        page: "pages/mysit/sit",
        data: {
          "keyword1": { "value": "中国地质大学北京", "color": "#173177" },
          "keyword2": { "value": "科研楼一楼" + app.globalData.sitno, "color": "#173177" },
          "keyword3": { "value": "您的座位正在被人举报，请及时返座，避免被客服释放！", "color": "#173177" },
        }
      }
  },

  cancel: function () {
    this.setData({
      hidden: true
    });
  },
  confirm: function () {
    this.setData({
      hidden: true
    });
  },

  modalTap: function (e) {
    this.setData({
      hidden: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      sitno: app.globalData.sitno,
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