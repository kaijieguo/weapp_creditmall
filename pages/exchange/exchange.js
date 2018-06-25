Page({
  data: {
  },
  onLoad: function (options) {
    var id = options.id
    console.log(options.id)

    // get global data
    var app = getApp()
    this.setData({
      item: app.globalData['goodList'][options.id]
    })
    console.log(this.data.item)
  },

  confirmExchange: function () {
    wx.showModal({
      title: '兑换成功',
      content: '您的积分已换取对应商品：' + this.data.item.msg,
      confirmText: "确认",
      cancelText: "辅助操作",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          wx.navigateTo({
            url: '../item_list/index',
          })
        } else {
          console.log('用户点击辅助操作')
        }
      }
    });
  }



})
