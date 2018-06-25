//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    goodList : [],
    credit : 1024,
  },
  //事件处理函数
  onLoad: function () {
    var app = getApp()
    var g = app.globalData['goodList']
    this.setData({goodList : g})
    //console.log(g)
  }
})
