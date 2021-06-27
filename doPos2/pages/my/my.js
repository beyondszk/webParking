//index.js
//获取应用实例
var app = getApp();

Page({
  data: {
    name:null,
    posno:null,
    markers: [

    ],
    controls:{


    },
    longitude:0,
    latitude: 0,
    showModalStatus: false,
    state:0,
    detail:{},
    timetxt:'预计时长',
    hour:0,
    checked:1,
    hasorder:0,
    orderDetail:{},
    showorderDetail:false,
    cancelDetail:{},
  },
  onReady: function (e) {
    wx.hideLoading()
    this.mapCtx = wx.createMapContext('myMap')
    var that =this;
    console.log(that.data.longitude)
    if(this.data.longitude == 0){
      this.gethearadr()
    }else{
      this.getAdrDate();
    }



  },
  onLoad: function (e) {
    
    wx.showLoading({})
    if(e.longitude){
      this.setData({
        longitude:e.longitude,
        latitude:e.latitude
      })
    }
  },
  gethearadr:function(){
    var that =this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude

        })
        console.log(res.longitude, res.latitude)

      },
      complete:function (res){
        
      }
    })
  },



  // saoFun:function(){
  //   var names = app.globalData.name
  //   wx.scanCode({
  //     success: (res) => {
  //       //console.log(res.result)
  //       this.setData({
  //         name:names,
  //         posno:res.result,

  //       })
  //       console.log(this.data.posno)

  //     }
  //   })


  //   // setTimeout(function () {
  //   //   console.log("asdas")
  //   //  }, 6000) //延迟时间 这里是1秒

    
  //   console.log("asdas")



  //   wx.navigateTo({
  //     url: '../saoma/saoma?posno='+this.data.posno
  //   })



   
  // },

  /**扫码 */
    addGoosInfo: function() {
      var names = app.globalData.name
      var that = this;
      var show;
      wx.scanCode({
        success: (res) => {
          this.show = "结果:" + res.result;
          
          that.setData({
            posno : res.result,
            name :names
          })
          console.log(this.data)
          wx.showToast({
            title: '扫码成功',
            icon: 'success',
            duration: 2000
          })

             wx.navigateTo({
      url: '../saoma/saoma?posno='+this.data.posno
    })
        },
        fail: (res) => {
          wx.showToast({
            title: '扫码失败',
            icon: 'success',
            duration: 2000
          })
        },
        complete: (res) => {}
      })
    
    },

    
  gudieFun:function(){

    wx.navigateTo({
      url: '../guide/guide'
    })
  }


  // searchFun:function(){
  //   wx.navigateTo({
  //     url: '../search/search'
  //   })
  // },
  
})
