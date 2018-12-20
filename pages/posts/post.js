// 只能用相对路径
var postsData = require('../../data/posts-data.js')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        /**
         * 小程序总是会读取 data 对象来做数据绑定, 这个动作我们称之为 A
         * 而这个动作 A 的执行, 是在 onLoad 事件执行之后发生的
         */
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // 页面初始化 options 为页面跳转所带来的参数
        this.setData({
            posts_key: postsData.postList
        });
    },

    onPostTap: function(event) {
        var postId = event.currentTarget.dataset.postid;
        wx.navigateTo({
            url: 'post-detail/post-detail?id=' + postId,
        })
    },

    // onSwiperItemTap: function(event) {
    //     var postId = event.currentTarget.dataset.postid;
    //     wx.navigateTo({
    //         url: 'post-detail/post-detail?id=' + postId,
    //     })
    // },

	onSwiperTap: function(event) {
		// target 和 currentTarget
    	// target指的是当前点击的组件 和 currentTarget 指的是事件捕获的组件
    	// target这里指的是image，而currentTarget指的是swiper
		var postId = event.target.dataset.postid;
		wx.navigateTo({
			url: 'post-detail/post-detail?id=' + postId,
		})
	}

})