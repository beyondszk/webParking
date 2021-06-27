//获取应用实例
var app = getApp();
var url = app.globalData.url


Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    isShowp:true,
    city :null,
    province:null,
    nickName:null ,
    avatarUrl:null,
    canIUse: wx.canIUse('button.open-type.getUserInfo')

  },

  /**
   * 生命周期函数--监听页面加载
   */

  bindViewTap() {
    wx.navigateTo({
      url: '../chat/chat'
    })
  },
  bindViewTap1() {
    wx.navigateTo({
      url: '../phone/phone?nickName='+this.data.nickName
    })
  },
  bindViewTap2() {
    wx.navigateTo({
      url: '../recharge/recharge'
    })
  },

  
  bindViewTap3() {
    wx.getUserProfile({
      lang:"zh_CN",
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        //console.log(res.userInfo)
        
        this.setData({
          nickName: res.userInfo.nickName,
          
          avatarUrl: res.userInfo.avatarUrl,
          province:res.userInfo.province,
          city :res.userInfo.city ,
          isShow:true,
          isShowp:false
      })
      
      app.globalData.name = this.data.nickName;
      var names = app.globalData.name
      console.log(names)
      console.log(this.data.avatarUrl)
      // wx.navigateTo({
      //   url: '../logintest/logintest?nickName='+this.data.nickName+'&city='+this.data.city
      //"pages/logintest/logintest"
      // })
      }
    })
    
  },
  
  bindViewTap4() {
    
    wx.navigateTo({
      url: '../logintest/logintest?nickName='+this.data.nickName
    })
  },
  bindViewTap5() {
    wx.navigateTo({
      url: '../order/order?nickName='+this.data.nickName
    })
  },

 
  
})