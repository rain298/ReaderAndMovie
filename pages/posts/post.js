Page({

  /**
   * 页面的初始数据
   */
  data: {
	date: "Nov 18 2018",
	title: "今天也是充满希望的一天",
	posts_key:[

	]
  },
  imgPath: "/images/...",
  process:function(){
	var date = "Nov 18 2018";
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	// 页面初始化 options 为页面跳转所带来的参数
	var posts_content = [
		{
			date: "Sep 18 2018",
			title: "今天也是充满希望的一天",
			post_img: "/images/post/1.jpg",
			author_img: "/images/avatar/2.jpg",
			content: "当凛冬安下她的灵魂，散下她的梦魇后，遗留在昨日繁华里的所有爱恨情仇，将会被一一埋葬。				  碧落黄泉，阴阳两隔，不再纠结，等待下一场轮回的上映，再写一段没有结局的故事;再话一					  场遍体鳞伤的桑麻.",
			view_num: "112",
			collect_num: "96",
		},
		{
			date: "Nov 20 2016",
			title: "比利·林恩的中场故事",
			post_img: "/images/post/2.jpg",
			author_img: "/images/avatar/3.jpg",
			content: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。",
			view_num: "98",
			collect_num: "124",
		}
	]
	this.setData({
		posts_key:posts_content
	});
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
	
  }
})