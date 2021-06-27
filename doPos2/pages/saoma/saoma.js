// pages/saoma/saoma.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

    name:null,
    posno:null,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

    
    this.setData({
      posno:options.posno
    })
    console.log(this.data.posno)



    
   


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
    var names = app.globalData.name


    
    wx.request({
      method: "POST",
      url: "http://127.0.0.1/interf/login/login2",
      data: {
        
        'name':names,
        'posno':this.data.posno,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {

        console.log(res)

        wx.showToast({
          title: '开闸成功',
          duration: 2000
        })
        
      }
    })


    wx.switchTab({
      url: '../my/my'
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