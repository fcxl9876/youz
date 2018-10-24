App({
  onLaunch: function () {
    var that = this;
    console.log('App Launch')
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //获取用户位置信息
    wx.getLocation({
      type:'wgs84',
      success: function(res) {
        console.log(res);
      },
    })
    //调用登录接口获取用户信息
    wx.login({
      success: function (res) {
        var code = res.code;//发送给服务器的code
           if (code) {
             wx.request({
               url: 'https://www.cugbyouz.cn/login.php',//服务器的地址
               data: {
                 code: code,
               },
               header: {
                 'content-type': 'application/json'
               },
               success: function (res) {
                 console.log(res.data);
                 that.globalData.openid = res.data.Uid;
               }
            })
           }
          else {
            console.log("获取用户登录态失败！");
          }
      },
      fail: function (error) {
        console.log('login failed ' + error);
      }
    })
},

  globalData: {
    userInfo: null,
    openid: null,
    color1: null,
    color2: null,
    color3: null,
    color4: null,
    color5: null,
    color6: null,
    color7: null,
    color8: null,
    sitno: 0,
    schoolno: null,
    time: null,
    lefttime: null,
    usetime: null,
  }
})