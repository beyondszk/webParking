let app = getApp();
Page({
  data: {
    name:null,
    ca: null,
    carno: null,
    phone: null
  },
  onLoad: function(options) {
    //console.log(options.nickName);
    this.setData({
      name: options.nickName,
     })
     //console.log(this.data.name)

  },
  formSubmit: function(e) {
    //console.log(e.detail)
   
    // var that = this;
    // var username = e.detail.value.username;
    // var tel = e.detail.value.tel;
    // var idcard = e.detail.value.idcard;
    // var rank = e.detail.value.rank;

    this.setData({
      ca: e.detail.value.ca,
      carno: e.detail.value.carno,
      phone: e.detail.value.phone
     
     })
     console.log(this.data)
    
  
    wx.request({
        method: "POST",
        url: "http://127.0.0.1/interf/login/login",
        data: {
          'name':this.data.name,
          'ca': this.data.ca,
          'carno': this.data.carno,
          'phone': this.data.phone,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {

          console.log(res.data)
          wx.showToast({
            title: '保存成功',
            duration: 2000
          })
        }
      })


  }

})
