//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    goodList:[
      {
        id:0,
        msg: "鸡",
        credit: "626",
        src: "../../images/chick.jpg",
      },
      {
        id: 1,
        msg: "瓜",
        credit: "913",
        src: "../../images/melon.jpg",
      },
      {
        id: 2,
        msg: "豆",
        credit: "234",
        src: "../../images/bean.jpg",
      },
      {
        id: 3,
        msg: "猪",
        credit: "914",
        src: "../../images/pig.jpg",
      },
      
    ]    
  },
  //事件处理函数
  onLoad: function () {
    // nothing
  }
})
