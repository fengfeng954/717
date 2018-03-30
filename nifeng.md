# 该项目是有关于手机端类是淘宝京东的一个电商的网站，

#用react框架为主和一些辅助包  
	大体分为：
		1.首页
			1.轮播图
				swiper
			2.商品分类
			3.商品列表
				1.点击列表进入详情页   路由跳转
				2.点击购付车图标添加购物车 使用http请求
				4.搜索页
		2.分类
			1.点击进去该类是的符合要求的列表
		3.购物车
			商品数量    加加减减 结算 编辑 删除 总价 全选 单选
		4.我的
			1.设置
				1.退出登录
				2.地址管理
					增 删 改 查

		5注册 登录

			注册把数据放到一个json中管理，用cookie生成一个加密的字段
			登录是判断登录的帐号密码和json的相同登陆成功跳转到首页



	核心工程目录
		src
			component
			 	home
			 	detail
			 	classify
			 	community
			 	address
			 	register
			 	login
			 	mine
			 	shopcar
			 	index
			 	seach
			 	setting
			router
				router.js
			store
				store.js
				reducers.js
			utils
				utils.js
				http.js 封装的http请求
		server
			server.js 后台


	主要功能：
	 react路由跳转
	 设置路由是是根据数据操作js渲染数据这样后台变我也在变
	 轮播图
	点击列表进入详情页
	点击购物车图标为何没进入详情页 是用了防止事件冒泡

	点击购物车用http请求数据并添加购物车(在登陆成功状态下..)

	点击搜索进入搜索页并把你写的内容本地储存在li列表里

	滑动列表获取滚动条下拉加载数据并把它渲染出来
	分类页点击获取不同数据

	购物车   使用http请求数据 点击加号商品数量更新 点击减号商品数量更新商品数量<1 减号消失 点击单选，全选总价更新 点击编辑  总价变删除(在登陆成功状态下..)

	我的点击设置跳转页面，退出登录

	注册 使用http请求数据 注册把数据放到一个json中管理，用cookie生成一个加密的字段

	登录 使用http请求数据 判断登录的帐号密码和json的相同登陆成功跳转到首页





	#辅助工具
	react
	react-redux
	redux
	react-router-dom
	jsonwebtoken 等等........