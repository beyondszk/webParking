// pages/w_my_payment_record/w_my_payment_record.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
    carno:null,
    ordermoney:null,
    ordersno:null,
    posdes:null,
    postime:null
    
  },

  // data: {
  //   name:null,
  //   arry:[{
          
  //       carno:null,
  //       ordermoney:null,
  //       ordersno:null,
  //       posdes:null,
  //       postime:null
  //   },
  //   {
             
  //           carno:null,
  //           ordermoney:null,
  //           ordersno:null,
  //           posdes:null,
  //           postime:null
  //     },
  //     {
        
  //     carno:null,
  //     ordermoney:null,
  //     ordersno:null,
  //     posdes:null,
  //     postime:null
  // },
  // {
          
  //       carno:null,
  //       ordermoney:null,
  //       ordersno:null,
  //       posdes:null,
  //       postime:null
  //   },



  //   ]
    
  // },
/**
 * 
 * @param { date: "",//日期     
      payment:[{
        car_number:"苏E·05E67",          //车牌号
        car_money: "6.00",               //支付金额
        payment_area: '日照停车场A2区域', //停车区域
        pay_no: "4576757857877857",          
        stop_time:"2小时25分钟11秒",      //停车时长
      }, {
        car_number: "苏E·05E67",          //车牌号
        car_money: "6.00",               //支付金额
        payment_area: '日照停车场A2区域', //停车区域
        pay_no: "4576757857877857",  
        stop_time: "2小时25分钟11秒",      //停车时长
        }, {
          car_number: "苏E·05E67",          //车牌号
          car_money: "6.00",               //支付金额
          payment_area: '日照停车场A2区域', //停车区域
          pay_no: "45767578fdsada",  
          stop_time: "2小时25分钟11秒",      //停车时长
        },],//缴费信息}// options 
 */
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //console.log(options.nickName);
    this.setData({
      name : options.nickName,
     })
     
    //console.log(this.data.name)
    //console.log(this.data)

    wx.request({
      method: "POST",
      url: "http://127.0.0.1/interf/login/chelist",
      data: {
        'name':this.data.name,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:(res) => {

        //console.log(res.data[0])


     
      
      //var index = res.target.dataset.index;
      // carno:null,
      // ordermoney:null,
      // ordersno:null,
      // posdes:null,
      // postime:null
      // for( i = 0; i <= 3 ;i++){

      //   this.setData({
          
      //     [string] : res.data[i].carno,
            
      //   })
      // }


      //  console.log(this.data)
       

        this.setData({
           
          carno:res.data[0].carno,
          ordermoney:res.data[0].ordermoney,
          ordersno:res.data[0].ordersno,
          posdes: res.data[0].posdes,
          postime: res.data[0].postime
         
         })

         console.log(this.data)
        wx.showToast({
          title: '数据库查询成功',
          duration: 2000
        })
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
  // 日期选择
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

})