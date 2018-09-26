var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
    nocancel: false,
    open: false,
    Sstate1: null,
    Sstate2: null,
    Sstate3: null,
    colorsit1: null,
    colorsit2: null,
    colorsit3: null,
    colorsit4: null,
    colorsit5: null,
    colorsit6: null,
    colorsit7: null,
    colorsit8: null,

    item_list: [ // 数据库连接测试数组
      {
        Sno: "test1",
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
    app.globalData.sitno = 1;
    var that = this;
    if (that.data.item_list[0].Sstate == '0'){
      wx.navigateTo({
        url: 'sit/sit',
      })
    }
    else if (that.data.item_list[0].Sstate == '1'){
      wx.navigateTo({
        url: 'sit/sit_busy',
      })
    }
    else if (that.data.item_list[0].Sstate == '2') {
      wx.navigateTo({
        url: 'sit/sit_left',
      })
    }
  },

  gotosit2: function () {
    app.globalData.sitno = 2;
    var that = this;
    if (that.data.item_list[1].Sstate == '0') {
      wx.navigateTo({
        url: 'sit/sit',
      })
    }
    else if (that.data.item_list[1].Sstate == '1') {
      wx.navigateTo({
        url: 'sit/sit_busy',
      })
    }
    else if (that.data.item_list[1].Sstate == '2') {
      wx.navigateTo({
        url: 'sit/sit_left',
      })
    }
  },

  gotosit3: function () {
    app.globalData.sitno = 3;
    var that = this;
    if (that.data.item_list[2].Sstate == '0') {
      wx.navigateTo({
        url: 'sit/sit',
      })
    }
    else if (that.data.item_list[2].Sstate == '1') {
      wx.navigateTo({
        url: 'sit/sit_busy',
      })
    }
    else if (that.data.item_list[2].Sstate == '2') {
      wx.navigateTo({
        url: 'sit/sit_left',
      })
    }
  },

  gotosit4: function () {
    app.globalData.sitno = 4;
    var that = this;
    if (that.data.item_list[3].Sstate == '0') {
      wx.navigateTo({
        url: 'sit/sit',
      })
    }
    else if (that.data.item_list[3].Sstate == '1') {
      wx.navigateTo({
        url: 'sit/sit_busy',
      })
    }
    else if (that.data.item_list[3].Sstate == '2') {
      wx.navigateTo({
        url: 'sit/sit_left',
      })
    }
  },

  gotosit5: function () {
    app.globalData.sitno = 5;
    var that = this;
    if (that.data.item_list[4].Sstate == '0') {
      wx.navigateTo({
        url: 'sit/sit',
      })
    }
    else if (that.data.item_list[4].Sstate == '1') {
      wx.navigateTo({
        url: 'sit/sit_busy',
      })
    }
    else if (that.data.item_list[4].Sstate == '2') {
      wx.navigateTo({
        url: 'sit/sit_left',
      })
    }
  },

  gotosit6: function () {
    app.globalData.sitno = 6;
    var that = this;
    if (that.data.item_list[5].Sstate == '0') {
      wx.navigateTo({
        url: 'sit/sit',
      })
    }
    else if (that.data.item_list[5].Sstate == '1') {
      wx.navigateTo({
        url: 'sit/sit_busy',
      })
    }
    else if (that.data.item_list[5].Sstate == '2') {
      wx.navigateTo({
        url: 'sit/sit_left',
      })
    }
  },

  gotosit7: function () {
    app.globalData.sitno = 7;
    var that = this;
    if (that.data.item_list[6].Sstate == '0') {
      wx.navigateTo({
        url: 'sit/sit',
      })
    }
    else if (that.data.item_list[6].Sstate == '1') {
      wx.navigateTo({
        url: 'sit/sit_busy',
      })
    }
    else if (that.data.item_list[6].Sstate == '2') {
      wx.navigateTo({
        url: 'sit/sit_left',
      })
    }
  },

  gotosit8: function () {
    app.globalData.sitno = 8;
    var that = this;
    if (that.data.item_list[7].Sstate == '0') {
      wx.navigateTo({
        url: 'sit/sit',
      })
    }
    else if (that.data.item_list[7].Sstate == '1') {
      wx.navigateTo({
        url: 'sit/sit_busy',
      })
    }
    else if (that.data.item_list[7].Sstate == '2') {
      wx.navigateTo({
        url: 'sit/sit_left',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.globalData.schoolno = 1;
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

        let Sstate1 = that.data.item_list[0].Sstate;
        let Sstate2 = that.data.item_list[1].Sstate;
        let Sstate3 = that.data.item_list[2].Sstate;
        let Sstate4 = that.data.item_list[3].Sstate;
        let Sstate5 = that.data.item_list[4].Sstate;
        let Sstate6 = that.data.item_list[5].Sstate;
        let Sstate7 = that.data.item_list[6].Sstate;
        let Sstate8 = that.data.item_list[7].Sstate;

        if (Sstate1 == '0') {
          app.globalData.color1 = "../../../../images/sit-green.png"
        }
        else if (Sstate1 == '1') {
          app.globalData.color1 = "../../../../images/sit-red.png"
        }
        else if (Sstate1 == '2') {
          app.globalData.color1 = "../../../../images/sit-yellow.png"
        }

        if (Sstate2 == '0') {
          app.globalData.color2 = "../../../../images/sit-green.png"
        }
        else if (Sstate2 == '1') {
          app.globalData.color2 = "../../../../images/sit-red.png"
        }
        else if (Sstate2 == '2') {
          app.globalData.color2 = "../../../../images/sit-yellow.png"
        }

        if (Sstate3 == '0') {
          app.globalData.color3 = "../../../../images/sit-green.png"
        }
        else if (Sstate3 == '1') {
          app.globalData.color3 = "../../../../images/sit-red.png"
        }
        else if (Sstate3 == '2') {
          app.globalData.color3 = "../../../../images/sit-yellow.png"
        }

        if (Sstate4 == '0') {
          app.globalData.color4 = "../../../../images/sit-green.png"
        }
        else if (Sstate4 == '1') {
          app.globalData.color4 = "../../../../images/sit-red.png"
        }
        else if (Sstate4 == '2') {
          app.globalData.color4 = "../../../../images/sit-yellow.png"
        }

        if (Sstate5 == '0') {
          app.globalData.color5 = "../../../../images/sit-green.png"
        }
        else if (Sstate5 == '1') {
          app.globalData.color5 = "../../../../images/sit-red.png"
        }
        else if (Sstate5 == '2') {
          app.globalData.color5 = "../../../../images/sit-yellow.png"
        }

        if (Sstate6 == '0') {
          app.globalData.color6 = "../../../../images/sit-green.png"
        }
        else if (Sstate6 == '1') {
          app.globalData.color6 = "../../../../images/sit-red.png"
        }
        else if (Sstate6 == '2') {
          app.globalData.color6 = "../../../../images/sit-yellow.png"
        }

        if (Sstate7 == '0') {
          app.globalData.color7 = "../../../../images/sit-green.png"
        }
        else if (Sstate7 == '1') {
          app.globalData.color7 = "../../../../images/sit-red.png"
        }
        else if (Sstate7 == '2') {
          app.globalData.color7 = "../../../../images/sit-yellow.png"
        }

        if (Sstate8 == '0') {
          app.globalData.color8 = "../../../../images/sit-green.png"
        }
        else if (Sstate8 == '1') {
          app.globalData.color8 = "../../../../images/sit-red.png"
        }
        else if (Sstate8 == '2') {
          app.globalData.color8 = "../../../../images/sit-yellow.png"
        }

        that.setData({
          colorsit1: app.globalData.color1,
          colorsit2: app.globalData.color2,
          colorsit3: app.globalData.color3,
          colorsit4: app.globalData.color4,
          colorsit5: app.globalData.color5,
          colorsit6: app.globalData.color6,
          colorsit7: app.globalData.color7,
          colorsit8: app.globalData.color8,
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
    var that = this;
    app.globalData.schoolno = 1;
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

        let Sstate1 = that.data.item_list[0].Sstate;
        let Sstate2 = that.data.item_list[1].Sstate;
        let Sstate3 = that.data.item_list[2].Sstate;
        let Sstate4 = that.data.item_list[3].Sstate;
        let Sstate5 = that.data.item_list[4].Sstate;
        let Sstate6 = that.data.item_list[5].Sstate;
        let Sstate7 = that.data.item_list[6].Sstate;
        let Sstate8 = that.data.item_list[7].Sstate;

        if (Sstate1 == '0') {
          app.globalData.color1 = "../../../../images/sit-green.png"
        }
        else if (Sstate1 == '1') {
          app.globalData.color1 = "../../../../images/sit-red.png"
        }
        else if (Sstate1 == '2') {
          app.globalData.color1 = "../../../../images/sit-yellow.png"
        }

        if (Sstate2 == '0') {
          app.globalData.color2 = "../../../../images/sit-green.png"
        }
        else if (Sstate2 == '1') {
          app.globalData.color2 = "../../../../images/sit-red.png"
        }
        else if (Sstate2 == '2') {
          app.globalData.color2 = "../../../../images/sit-yellow.png"
        }

        if (Sstate3 == '0') {
          app.globalData.color3 = "../../../../images/sit-green.png"
        }
        else if (Sstate3 == '1') {
          app.globalData.color3 = "../../../../images/sit-red.png"
        }
        else if (Sstate3 == '2') {
          app.globalData.color3 = "../../../../images/sit-yellow.png"
        }

        if (Sstate4 == '0') {
          app.globalData.color4 = "../../../../images/sit-green.png"
        }
        else if (Sstate4 == '1') {
          app.globalData.color4 = "../../../../images/sit-red.png"
        }
        else if (Sstate4 == '2') {
          app.globalData.color4 = "../../../../images/sit-yellow.png"
        }

        if (Sstate5 == '0') {
          app.globalData.color5 = "../../../../images/sit-green.png"
        }
        else if (Sstate5 == '1') {
          app.globalData.color5 = "../../../../images/sit-red.png"
        }
        else if (Sstate5 == '2') {
          app.globalData.color5 = "../../../../images/sit-yellow.png"
        }

        if (Sstate6 == '0') {
          app.globalData.color6 = "../../../../images/sit-green.png"
        }
        else if (Sstate6 == '1') {
          app.globalData.color6 = "../../../../images/sit-red.png"
        }
        else if (Sstate6 == '2') {
          app.globalData.color6 = "../../../../images/sit-yellow.png"
        }

        if (Sstate7 == '0') {
          app.globalData.color7 = "../../../../images/sit-green.png"
        }
        else if (Sstate7 == '1') {
          app.globalData.color7 = "../../../../images/sit-red.png"
        }
        else if (Sstate7 == '2') {
          app.globalData.color7 = "../../../../images/sit-yellow.png"
        }

        if (Sstate8 == '0') {
          app.globalData.color8 = "../../../../images/sit-green.png"
        }
        else if (Sstate8 == '1') {
          app.globalData.color8 = "../../../../images/sit-red.png"
        }
        else if (Sstate8 == '2') {
          app.globalData.color8 = "../../../../images/sit-yellow.png"
        }

        that.setData({
          colorsit1: app.globalData.color1,
          colorsit2: app.globalData.color2,
          colorsit3: app.globalData.color3,
          colorsit4: app.globalData.color4,
          colorsit5: app.globalData.color5,
          colorsit6: app.globalData.color6,
          colorsit7: app.globalData.color7,
          colorsit8: app.globalData.color8,
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