Page({
	onTab:function(){
		// wx.navigateTo({
		// 	url: '../posts/post'
		// });

		wx.redirectTo({
			url: '../posts/post'
		})

		// wx.navigateTo({
		// 	url: '../posts/post',
		// 	success: function(res){

		// 	},
		// 	fail: function() {

		// 	},
		// 	complete: function() {

		// 	}
		// })
	} 
})