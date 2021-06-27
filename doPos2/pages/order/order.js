// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    payData:['微信支付','银行卡支付','刷脸支付'],
　  i:0,
            boolean: null,
                  carno: null,
                  
                  
                  name: null,
                  ordermoney: null,
                  ordersno:null,
                  
                 
                 
                  postime: null,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name : options.nickName,
     })
    wx.request({
      method: "POST",
      url: "http://127.0.0.1/interf/login/chelist2",
      data: {
        'name':this.data.name,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:(res) => {

        this.setData({
          boolean:res.data[0].boolean,
          ordermoney:res.data[0].ordermoney,
          ordersno:res.data[0].ordersno,
          carno: res.data[0].carno,
          postime: res.data[0].postime,
          name: res.data[0].name
         
         })


         console.log(this.data)


        wx.showToast({
          title: '数据库查询成功',
          duration: 2000
        })
      }
    })

   
 
  },
  // payment() {
  //   wx.navigateTo({
  //     url: '../pay/pay'
  //   })
  // },
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