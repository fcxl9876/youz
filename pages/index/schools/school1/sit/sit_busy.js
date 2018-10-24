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
    token: null,
    result: [],
  },

  // message: function (e) {
  //   var that = this;
  //   wx.request({
  //     url: 'https://www.cugbyouz.cn/getlastid.php',
  //     header: {
  //       //传输接收数据的头（！！！）
  //       'content-type': 'application/x-www-form-urlencoded'
  //     },
  //     data: {
  //       x: app.globalData.sitno
  //     },
  //     success: function (res) {
  //       that.setData({
  //         lastid: res.data,
  //       })
  //     },
  //     fail: function (err) {
  //       // fail
  //     },
  //     complete: function (res) {
  //       // complete
  //     }
  //   })
  //   wx.request({
  //     url: 'https://www.cugbyouz.cn/gettoken.php',
  //     success: function (res) {
  //       that.setData({
  //         token: res.data,
  //       })
  //     },
  //   })
  //   var fId = e.detail.formId;
  //   var _access_token = this.data.token;
  //   var Url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + _access_token;
  //   var _jsonData = {
  //       touser: that.data.lastid,
  //       template_id: 'kjF6zZFL4gkSebt9X7Yq65pcdPG0-Rdt1lBkQiivz7I',
  //       form_id: fId,
  //       page: "/pages/mysit/sit",
  //       data: {
  //         "keyword1": { "value": "中国地质大学北京", "color": "#173177" },
  //         "keyword2": { "value": "科研楼一楼" + app.globalData.sitno, "color": "#173177" },
  //         "keyword3": { "value": "您的座位正在被人举报，请及时返座，避免被客服释放！", "color": "#173177" },
  //       },
  //       color: '#ccc',
  //       emphasis_keyword: 'keyword1.DATA'
  //     }
  //   wx.request({
  //     url: Url,
  //     data: _jsonData,
  //     method: 'POST',
  //     success: function (res) {
  //       console.log("push msg");
  //       console.log(res);
  //     },
  //     fail: function (err) {
  //       console.log("push err")
  //       console.log(err);
  //     }
  //   })
  // },

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