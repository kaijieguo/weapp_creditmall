//logs.js

Page({
  data: {
    item : {

    }
  },
  onLoad: function(options) {
    var id = options.id
    console.log(options.id)

    // get global data
    var app = getApp()
    this.setData({
      item: app.globalData['goodList'][options.id]
    })
  },

  confirm: function () {
    var myurl = '../exchange/exchange?id='
    myurl += this.data.item.id.toString()
    wx.navigateTo({
      url: myurl,
    })
  }

})
