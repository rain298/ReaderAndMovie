var postsData = require('../../../data/posts-data.js')

Page({

    data: {

    },

    onLoad: function(option) {
        var postId = option.id;
        this.data.currentPostId = postId;
        var postData = postsData.postList[postId];
        this.setData({
            postData: postData
        });

        var postsCollected = wx.getStorageSync('posts_collected')
        if (postsCollected) {
            var postCollected = postCollected[postId]
            this.setData({
                collected: postCollected
            })
        } else {
            var postsCollected = {};
            postsCollected[postId] = false;
			wx.setStorageSync('posts_collected', postsCollected);

        }
    },

	onCollectionTap: function(event){
		var postsCollected = wx.getStorageSync('posts_collected');
		var postCollected = postsCollected[this.data.currentPostId];
		postCollected = !postCollected;
		postsCollected[this.data.currentPostId] = postCollected;
		// 更新文章是否收藏的缓存值
		wx.setStorageSync('posts_collected', postsCollected);
		// 更新数据绑定变量, 从而实现图片切换
		this.setData({
			collected : postCollected
		})
	} 

})