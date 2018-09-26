var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hidden1: true,
    hidden2: true,
    hidden3: true,
    nocancel1: false,
    nocancel2: true,
    nocancel3: false,
    sitno: null,
    schoolno: null,
    sitstate: null,
    time: null,
    lefttime: null,
    // openid: null,

    item_list: [ // 数据库连接测试数组
      {
        Sno: "test1",
        Sstate: ""
      },
    ],
  },

  modalTap1: function (){
    this.setData({
      hidden3: false
    })
  },

  modalTap2: function (){
    this.setData({
      hidden1: false
    })
  },

  modalTap3: function () {
    var that = this;
    //将座位状态改为使用中
    wx.request({
      url: 'https://www.cugbyouz.cn/sit_back.php',
      header: {
        //传输接收数据的头（！！！）
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        x: app.globalData.sitno
      },
      success: function (res) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad(); 
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },

  cancel1: function () {
    this.setData({
      hidden1: true
    });
  },

  cancel2: function () {
    this.setData({
      hidden3: true
    });
  },

  confirm1: function () {
    var that = this;
    //将座位状态改为未使用
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
        that.setData({
          hidden2: false
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

  confirm2: function () {
    this.setData({
      hidden1: true,
      hidden2: true,
      hidden3: true,
    })
    app.globalData.sitno = 0;
    //跳转到主页
    wx.reLaunch({
      url: '../index/index',
    })
  },

  confirm3: function (){
    this.setData({
      hidden3: true
    })
    //跳转到离开界面
    wx.navigateTo({
      url: 'left',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // this.setData({
    //   openid: app.globalData.openid,
    // })
    var openid = app.globalData.openid;
    wx.request({
      url: 'https://www.cugbyouz.cn/check.php',
      header: {
        //传输接收数据的头（！！！）
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        x: that.openid,
      },
      success: function (res) {
        if (res.data != null) {
          app.globalData.sitno = res.data
        }
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
    this.setData({
      schoolno: app.globalData.schoolno,
      time: app.globalData.time,
      lefttime: app.globalData.lefttime, 
    })
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
        if (app.globalData.sitno == '1') {
          that.setData({
            sitstate: that.data.item_list[0].Sstate,
            sitno: 1,
          })
        }
        else if (app.globalData.sitno == '2') {
          that.setData({
            sitstate: that.data.item_list[1].Sstate,
            sitno: 2,
          })
        }
        else if (app.globalData.sitno == '3') {
          that.setData({
            sitstate: that.data.item_list[2].Sstate,
            sitno: 3,
          })
        }
        else if (app.globalData.sitno == '4') {
          that.setData({
            sitstate: that.data.item_list[3].Sstate,
            sitno: 4,
          })
        }
        else if (app.globalData.sitno == '5') {
          that.setData({
            sitstate: that.data.item_list[4].Sstate,
            sitno: 5,
          })
        }
        else if (app.globalData.sitno == '6') {
          that.setData({
            sitstate: that.data.item_list[5].Sstate,
            sitno: 6,
          })
        }
        else if (app.globalData.sitno == '7') {
          that.setData({
            sitstate: that.data.item_list[6].Sstate,
            sitno: 7,
          })
        }
        else if (app.globalData.sitno == '8') {
          that.setData({
            sitstate: that.data.item_list[7].Sstate,
            sitno: 8,
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
    this.onLoad();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.onLoad();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.onLoad();
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