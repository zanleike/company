Page({
  data: {
  },
  toURLa: function () {
    wx.switchTab({
      url: '/pages/im/im',
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    var imgList = [];
    imgList.push(e.target.dataset.src.toString());
    wx.previewImage({
      current: current,//当前点击的图片链接
      urls: imgList//图片数组
    })
  }
})