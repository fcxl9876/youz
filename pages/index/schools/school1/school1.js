Page({
  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
    nocancel: false,
    open: false,

    item_list: [ // 数据库连接测试数组
      {
        Sno: "test1",
        Stype: "",
        Slevel: "",
        Sstate: ""
      },
      {
        Sno: "test2",
        Stype: "",
        Slevel: "",
        Sstate: ""
      },
      {
        Sno: "test3",
        Stype: "",
        Slevel: "",
        Sstate: ""
      },
    ],
  },
  
  cancel: function () {
    this.setData({
      nocancel: !this.data.nocancel
    });
  },
  confirm: function () {
    this.setData({
      hidden: true
    });
  },

  showitem: function () {
    this.setData({
      open: !this.data.open
    })
  },

  gotosit1:function(){
    wx.navigateTo({
      url: 'sit/sit1',
    })
  },

  gotostate2: function () {
    wx.navigateTo({
      url: '../../state/state2',
    })
  },

  gotostate3: function () {
    wx.navigateTo({
      url: '../../state/state5',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;

    wx.request({ //网络请求测试函数
      url: 'https://www.cugbyouz.cn/test.php',//此处填写你后台请求地址
      method: 'GET',
      header: { 'Content-Type': 'application/json' },
      data: {},
      success: function (res) {
        // success
        console.log(res.data);//打印请求返回的结果
        that.setData({
          item_list: res.data
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