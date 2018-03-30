import React, {
	Component
} from "react"
import Index from "../../component/index/index.jsx";
import Register from "../../component/register/register.jsx";
import Login from "../../component/login/login.jsx";
import Classify from "../../component/classify/classify.jsx";
import Detail from "../../component/detail/detail.jsx";
import Mine from "../../component/mine/mine.jsx";
import Shopcar from "../../component/shopcar/shopcar.jsx";
import Mmobile from "../../component/home/mmobile.jsx";
import Community from "../../component/community/community.jsx";
import Seach from "../../component/seach/seach.jsx";
import Setting from "../../component/setting/setting.jsx";
let Router = {
	rules: [{
		path: "/index",
		component: Index,
		children: [{
			path: "/index/mmobile",
			component: Mmobile
		}, {
			path: "/index/classify",
			component: Classify,
		}, {
			path: "/index/community",
			component: Community,
		}, {
			path: "/index/shopcar",
			component: Shopcar,
		}, {
			path: "/index/mine",
			component: Mine,
		}, {
			path: "/index/seach",
			component: Seach,
		}]
	}, {
		path: "/detail",
		component: Detail
	}, {
		path: "/login",
		component: Login
	}, {
		path: "/register",
		component: Register
	}, {
		path: "/setting",
		component: Setting
	}]
}
export default Router