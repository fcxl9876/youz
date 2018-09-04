var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    scale: 18, // 缩放级别，默认18，数值在0~18之间
    latitude: 0, // 给个默认值
    longitude: 0, // 给个默认值

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

    markers: [ //地图数组
    {
      iconPath: '/images/map.png',
      id: 0,
      latitude: 39.992669,
      longitude: 116.350096,
      width: 50,
      height: 50
    }]

  },

  markertap(e) {
    wx.navigateTo({
      url: 'schools/school1/school1',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this;

    // 调用wx.getLocation系统API,获取并设置当前位置经纬度
    wx.getLocation({
      type: "gcj02", // 坐标系类型
      // 获取经纬度成功回调
      success: (res) => { // es6 箭头函数，可以解绑当前作用域的this指向，使得下面的this可以绑定到Page对象
        this.setData({  // 为data对象里定义的经纬度默认值设置成获取到的真实经纬度，这样就可以在地图上显示我们的真实位置
          longitude: res.longitude,
          latitude: res.latitude
        })
        this.mapCtx.moveToLocation();
      }
    });

    wx.getSystemInfo({ // 系统API,获取系统信息，比如设备宽高
      success: (res) => {
        this.setData({
          //定义控件数组，可以在data对象初始化为[],也可以不初始化，取决于是否需要更好的阅读
          controls: [{
            id: 1, // 给控件定义唯一id
            iconPath: '/images/map.png', // 控件图标
            position: { // 控件位置
              left: res.windowWidth / 2 + 60, // 单位px
              top: res.windowHeight / 2 - 60, // 根据设备高度设置top值，可以做到在不同设备上效果一致
              width: 30, // 控件宽度/px
              height: 30 // 控件高度/px
            },
            clickable: true // 是否可点击，默认为true,可点击
          }]
        })
      }
    });

    wx.request({ //网络请求测试函数
      url: 'https://www.cugbyouz.cn/test.php',//此处填写你后台请求地址
      method: 'GET',
      header: { 'Content-Type': 'application/json' },
      data: {},
      success: function (res) {
        // success
        console.log(res.data);//打印请求返回的结果
        that.setData ({
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

  bindcontroltap: function (e) {
    // 判断点击的是哪个控件 e.controlId代表控件的id，在页面加载时的第3步设置的id
    switch (e.controlId) {
      // 点击选择教室控件，跳转到选择教室页
      case 1: wx.navigateTo({
        url: 'schools/school1/school1'
      });
        break;
      default: break;
    }
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
    //创建地图上下文，移动当前位置到地图中心
    this.mapCtx = wx.createMapContext("Map"); // 地图组件的id
    this.movetoPosition()
  },

  // 定位函数，移动位置到地图中心
  movetoPosition: function () {
    this.mapCtx.moveToLocation();
  }
  
})