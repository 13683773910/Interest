
var newsData = require('../data/newsdata.js');

// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:2000,
    circular:true,
    useData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    //this.setData可以让view重绘
    this.setData({
      useData:newsData.initData
    })
  },

  goNewsDetail:function(event){
    //console.log(event)
    var newsId = event.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: 'news-detail/news-detail?newsid='+newsId
    })
    //console.log('news-detail/news-detail/?newsid=' + newsId)
  }


})